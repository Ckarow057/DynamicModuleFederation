import { lazy } from "react";
import {
    __federation_method_getRemote,
    __federation_method_setRemote,
    // @ts-ignore
} from "__federation__";


export async function fetchRemoteApps() {
    try {
        const res = await fetch('http://localhost:3000/all');
        const data = await res.json();
        return data.rows;
    } catch (error) {
        console.error('Failed to fetch remote apps:', error);
        return [];
    }
}

export function UseFeatureFlagsOrSomethingCoolToGetRemote(imports: any[], currentConfigIndex: number) {
    const remoteConfig = imports[currentConfigIndex];
    return remoteConfig;
}

export function createDynamicRemoteApp(imports: any[], currentConfigIndex: number) {
    return lazy(() => {
        const { url, name, module } = UseFeatureFlagsOrSomethingCoolToGetRemote(imports, currentConfigIndex);

        __federation_method_setRemote(name, {
            url: () => Promise.resolve(url),
            format: "esm",
            from: "vite",
        });

        return __federation_method_getRemote(name, module);
    });
}