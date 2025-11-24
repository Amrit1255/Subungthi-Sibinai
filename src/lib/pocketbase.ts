import PocketBase from "pocketbase";

const DEFAULT_URL =
  import.meta.env.VITE_POCKETBASE_URL || "http://127.0.0.1:8090";

const pb = new PocketBase(DEFAULT_URL);

// Enable auto cancellation for duplicate requests
pb.autoCancellation(false);

export function signInWithEmail(email: string, password: string) {
  return pb.collection("users").authWithPassword(email, password);
}

export function signOut() {
  try {
    pb.authStore.clear();
  } catch (e) {
    // noop
  }
}

export function getCurrentUser() {
  return pb.authStore.model;
}

export function getFileUrl(
  record: Record<string, unknown>,
  fileField: string | string[]
) {
  if (!record) return undefined;
  // if it's an array of filenames pick the first
  const filename = Array.isArray(fileField) ? fileField[0] : fileField;
  if (!filename) return undefined;
  try {
    return pb.files.getUrl(record, filename);
  } catch (e) {
    return undefined;
  }
}

// Helper to fetch collection with proper error handling
export async function getCollection<T = unknown>(
  collectionName: string,
  options = {}
) {
  try {
    const records = await pb.collection(collectionName).getFullList(options);
    return records as T[];
  } catch (error) {
    console.error(`PocketBase error fetching ${collectionName}:`, error);
    throw error;
  }
}

export default pb;
