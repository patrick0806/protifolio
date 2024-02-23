export function CMSIcon({ icon }: { icon: string }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: icon }} />
    )
}