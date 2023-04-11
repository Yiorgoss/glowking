import { ReactElement, useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const SideMenu = ({
    left = true,
    children,
    active,
    setActive,
    innerClass,
    outerClass
}: {
    left?: boolean;
    children: ReactElement | ReactElement[] | string;
    active: boolean;
    setActive: (value: boolean) => void;
    innerClass?: string;
    outerClass?: string;
}) => {
    const node = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const entrySide = left
        ? ['right-0', 'right-[100vw]']
        : ['left-0', 'left-[100vw]'];

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            if (node.current && node.current.contains(e.target as Node)) {
                console.log('node: false', node);
                return;
            }
            console.log('node: false', node);
            setActive(false);
        },
        [setActive]
    );

    useEffect(() => {
        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active, handleClickOutside]);
    useEffect(() => {
        setActive(false);
    }, [router.asPath, setActive]);

    return (
        <div
            className={`fixed top-0 z-20 h-screen w-screen bg-zinc-600/80 transition-all duration-300 ${
                active ? entrySide[0] : entrySide[1]
            } ${outerClass}`}>
            <div
                className={`h-full w-5/6 bg-primary ${
                    left && 'ml-auto'
                } ${innerClass} `}
                ref={node}>
                {children}
            </div>
        </div>
    );
};

export default SideMenu;
