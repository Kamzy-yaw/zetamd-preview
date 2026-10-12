
const DEFAULT_IMAGE =
    process.env.DEFAULT_GROUP_BANNER ||
    "https://cdn.filn.pp.ua/uploads/betabotzapi/c21ce.jpg";

export const metadata = {
    title: "ZetaMD — Default Banner",
    description: "Default WhatsApp preview banner for ZetaMD.",
    openGraph: {
        type: "website",
        title: "ZetaMD",
        description: "Default WhatsApp preview banner.",
        images: [
            {
                url: DEFAULT_IMAGE,
                width: 1200,
                height: 630,
                alt: "ZetaMD Default Banner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ZetaMD",
        description: "Default WhatsApp preview banner.",
        images: [DEFAULT_IMAGE],
    },
};

export default function DefaultPreviewPage() {
    return (
        <main
            style={{
                maxWidth: 760,
                margin: "24px auto",
                background: "#fff",
                padding: 24,
                borderRadius: 16,
            }}
        >
            <p style={{ color: "#666", fontSize: 13 }}>
                ZetaMD · Default Preview
            </p>
            <h1>ZetaMD Default Banner</h1>
            <p>
                Banner ini digunakan sebagai fallback untuk grup yang
                belum memiliki banner custom.
            </p>
            <img
                src={DEFAULT_IMAGE}
                alt="ZetaMD Default Banner"
                style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: 12,
                }}
            />
        </main>
    );
}
