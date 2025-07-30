'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const navtabs = [
        "Code",
        "Issues",
        "Pull requests",
        "Actions",
        "Projects",
        "Wiki",
        "Security",
        "Insights",
        "Settings"
    ];
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("Code");
    useEffect(() => {
        const currentTab = navtabs.find(tab => {
            const path = "/" + tab.toLowerCase().replaceAll(" ", "-");
            return pathname === path;
        });

        if (currentTab) {
            setActiveTab(currentTab);
        } else if (pathname === "/") {
            setActiveTab("/");
        }
    }, [pathname]);
    return (
        <div style={{ background: "#020203", color: "#c9d1d9", fontFamily: "Segoe UI, Arial, sans-serif" }}>

            <header style={{ display: "flex", alignItems: "center", padding: "16px 32px", borderBottom: "1px solid transparent" }}>
                <div style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    borderRadius: 6,
                    color: "#c9d1d9",
                    margin: "0 16px",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                }}>
                    <Image
                        className="dark:invert"
                        src="/menu-icon.jpg"
                        alt="Menu Icon"
                        width={24}
                        height={24}
                        style={{ margin: "4px" }}
                    /></div>
                <Image
                    src="/github-logo.svg"
                    alt="GitHub Logo"
                    width={32}
                    height={32}
                    style={{ marginRight: 16 }}
                />
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div style={{ background: "#020203", color: "#c9d1d9", fontFamily: "Segoe UI, Arial, sans-serif", cursor: "pointer" }}>
                        <span style={{ color: "#c9d1d9", fontWeight: 600, marginRight: 4 }}>vthah</span>
                        <span style={{ margin: "0 4px" }}>/</span>
                        <span style={{ fontWeight: 600 }}>MTG_Project</span>
                    </div>
                </Link>
                <span style={{ marginLeft: "auto", display: "flex" }}>
                    <div style={{
                        width: 32,
                        height: 32,
                        borderLeft: "1px solid #30363d",
                        borderRight: "none",
                        borderBottom: "1px solid #30363d",
                        borderTop: "1px solid #30363d",
                        background: "#0d1117",
                        borderRadius: "6px 0 0 6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}>
                        <Image
                            className="dark:invert"
                            src="/search-icon.svg"
                            alt="Search Icon"
                            width={16}
                            height={16}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Type to search"
                        style={{
                            width: "268px",
                            height: "32px",
                            background: "#0d1117",
                            borderLeft: "none",
                            borderRight: "1px solid #30363d",
                            borderBottom: "1px solid #30363d",
                            borderTop: "1px solid #30363d",
                            borderRadius: "0 6px 6px 0",
                            color: "#c9d1d9",
                            padding: "0 8px",
                            outline: "none"
                        }} />
                </span>

                <span style={{ display: "flex", margin: "0 8px" }}>

                    <div style={{
                        width: 32,
                        height: 32,
                        background: "#0d1117",
                        border: "1px solid #30363d",
                        borderRadius: "6px 0 0 6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}>
                        <Image
                            src="/copilot_logo.png"
                            alt="Copilot Logo"
                            width={16}
                            height={16}
                        />
                    </div>

                    <div style={{
                        width: 32,
                        height: 32,
                        background: "#0d1117",
                        border: "1px solid #30363d",
                        borderRadius: "0 6px 6px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: "none",
                        cursor: "pointer"
                    }}>
                        <Image
                            src="/triangle_flipped.png"
                            alt="Triangle Flipped"
                            width={8}
                            height={8}

                        />
                    </div>
                </span>

                <span style={{ marginBottom: 6, color: "#6e7681" }}>|</span>

                <span style={{ display: "flex", margin: "0 8px" }}>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderLeft: "1px solid #30363d",
                            borderRight: "none",
                            borderBottom: "1px solid #30363d",
                            borderTop: "1px solid #30363d",
                            background: "#0d1117",
                            borderRadius: "6px 0 0 6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}
                    >
                        <Image
                            className="dark:invert"
                            src="/plus.png"
                            alt="Plus Icon"
                            width={12}
                            height={12}
                        />
                    </div>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderLeft: "none",
                            borderRight: "1px solid #30363d",
                            borderBottom: "1px solid #30363d",
                            borderTop: "1px solid #30363d",
                            background: "#0d1117",
                            borderRadius: "0 6px 6px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}
                    ><Image
                            src="/triangle_flipped.png"
                            alt="Triangle Flipped"
                            width={8}
                            height={8}

                        />

                    </div>
                </span>
                <span style={{ display: "flex", margin: "0 8px", gap: "8px" }}>
                    <div style={{ width: 32, height: 32, background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, cursor: "pointer" }} >
                        <Image
                            className="dark:invert"
                            src="/issue.jpg"
                            alt="Issue"
                            width={16}
                            height={16}
                            style={{ margin: "8px" }}
                        />
                    </div>
                    <div style={{ width: 32, height: 32, background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, cursor: "pointer" }} >
                        <Image
                            className="dark:invert"
                            src="/pull request.jpg"
                            alt="Pull Request"
                            width={16}
                            height={16}
                            style={{ margin: "8px" }}
                        />
                    </div>
                    <div style={{ width: 32, height: 32, background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, cursor: "pointer" }} >
                        <Image
                            className="dark:invert"
                            src="/inbox.png"
                            alt="Inbox"
                            width={16}
                            height={16}
                            style={{ margin: "8px" }}
                        />
                    </div>
                </span>
                <span style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #30363d", background: "#0d1117", backgroundColor: "#8f8989" }}>
                </span>
            </header>
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 32px",
                    borderBottom: "2px solid #21262d",
                    background: "#020203",
                }}
            >
                {navtabs.map((tab) => {
                    const path = "/" + tab.toLowerCase().replaceAll(" ", "-");
                    const isActive = activeTab === tab;

                    return (
                        <Link
                            key={tab}
                            href={path}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <div
                                style={{
                                    padding: "12px 16px",
                                    color: isActive ? "#fff" : "#c9d1d9",
                                    borderBottom: isActive ? "2px solid #fff" : "2px solid transparent",
                                    fontWeight: isActive ? 600 : 400,
                                    cursor: "pointer",
                                    transition: "border-bottom 0.2s, color 0.2s",
                                }}
                            >
                                {tab}
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    )
}

