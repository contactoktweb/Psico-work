"use client";

import dynamic from "next/dynamic";

export const PsicoWorkPlus = dynamic(
    () => import("@/components/psico-work-plus").then((mod) => mod.PsicoWorkPlus),
    {
        loading: () => <div className="h-96 bg-gray-50/50 animate-pulse rounded-lg my-20" />,
        ssr: false,
    }
);
