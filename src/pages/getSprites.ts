import type { APIContext } from "astro";
import * as fs from "fs";
import { resolve } from "path";

export async function get({ url: { searchParams } }: APIContext) {
    const id = searchParams.get("id");
    const file = fs.readFileSync(resolve(`public/spritesJson/${id}.json`));
    const fileJson = JSON.parse(file.toString());

    return {
        body: JSON.stringify(fileJson),
    };
}
