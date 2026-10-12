import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI belum diset.");
let cache = globalThis.__mongooseCache;
if (!cache) cache = globalThis.__mongooseCache = { conn: null, promise: null };
export async function connectMongoDB() {
  if (cache.conn) return cache.conn;
  if (!cache.promise) cache.promise = mongoose.connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 10000 }).catch(e => { cache.promise = null; throw e; });
  cache.conn = await cache.promise;
  return cache.conn;
}
