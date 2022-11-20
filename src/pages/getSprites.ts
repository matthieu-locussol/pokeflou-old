import type { APIContext } from "astro";

export async function get({ url: { searchParams } }: APIContext) {
    const id = searchParams.get("id");
    const file = await fetch(
        `${import.meta.env.PUBLIC_BASE_PATH}/spritesJson/${id}.json`
    );
    const fileJson = await file.json();

    return {
        body: JSON.stringify(fileJson),
    };
}
