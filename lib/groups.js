import { connectMongoDB } from './mongodb.js'
import GroupPreview from '../models/GroupPreview.js'

const DEFAULT_IMAGE = process.env.DEFAULT_GROUP_BANNER || "https://cdn.filn.pp.ua/uploads/betabotzapi/c21ce.jpg";
export async function getGroupPreview(slug) {
  await connectMongoDB();
  const group = await GroupPreview.findOne({ slug, enabled: true }).lean();
  if (!group) return null;
  return {
    slug: group.slug,
    title: group.title || "ZetaMD",
    description: group.description || "Welcome to the ZetaMD community.",
    image: group.useDefaultBanner || !group.imageUrl ? DEFAULT_IMAGE : group.imageUrl
  };
}
