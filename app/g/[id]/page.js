import { notFound } from "next/navigation";
import { getGroupPreview } from "../../../lib/groups.js";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }) {
 const { id } = await params;
 const group = await getGroupPreview(id);
 if (!group) return { title: "Preview tidak ditemukan | ZetaMD", robots: { index: false, follow: false } };
 return {
  title: group.title, description: group.description,
  openGraph: { type:"website", title:group.title, description:group.description, images:[{url:group.image,width:1200,height:630,alt:group.title}] },
  twitter: { card:"summary_large_image", title:group.title, description:group.description, images:[group.image] }
 };
}
export default async function GroupPreviewPage({ params }) {
 const { id } = await params; const group = await getGroupPreview(id); if (!group) notFound();
 return <main style={{maxWidth:760,margin:"24px auto",background:"#fff",padding:24,borderRadius:16,boxShadow:"0 4px 24px rgba(0,0,0,.07)"}}>
 <p style={{color:"#666",fontSize:13}}>ZetaMD · Link Preview</p><h1>{group.title}</h1><p>{group.description}</p>
 <img src={group.image} alt={group.title} style={{display:"block",width:"100%",height:"auto",borderRadius:12}} />
 <p style={{color:"#666",fontSize:13}}>Preview ID: {group.slug}</p></main>;
}
