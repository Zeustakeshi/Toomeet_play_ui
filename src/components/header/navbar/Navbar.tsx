"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Home,
    Menu,
    SquarePlay,
    Rss,
    SquareUserRound,
    History,
    ListVideo,
    MonitorPlay,
    Clock9,
    ThumbsUp,
    Flame,
    Music2,
    Gamepad2,
    Newspaper,
    Trophy,
    Settings,
    CircleHelp,
    MessageSquareWarning,
} from "lucide-react";
import Logo from "../../ui/logo";

import NavbarItem from "./NavbarItem";
import NavbarItemGroup from "./NavbarItemGroup";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-0 w-max slow-hidden">
                <SheetHeader className="px-5 flex flex-row justify-center items-center">
                    <Logo></Logo>
                </SheetHeader>
                {/* <ScrollArea className="max-h-[90svh] border"> */}
                <div className="h-min max-h-[90svh] overflow-y-scroll">
                    <NavbarItemGroup>
                        <NavbarItem to="/" icon={<Home></Home>}>
                            Trang chủ
                        </NavbarItem>
                        <NavbarItem to="/" icon={<SquarePlay />}>
                            Shorts
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Rss />}>
                            Kênh đăng ký
                        </NavbarItem>
                    </NavbarItemGroup>
                    {/* Cho bạn */}
                    <NavbarItemGroup title="Bạn" to="/">
                        <NavbarItem to="/" icon={<SquareUserRound />}>
                            Kênh của bạn
                        </NavbarItem>
                        <NavbarItem to="/" icon={<History />}>
                            Video đã xem
                        </NavbarItem>
                        <NavbarItem to="/" icon={<ListVideo />}>
                            Danh sách phát
                        </NavbarItem>
                        <NavbarItem to="/" icon={<MonitorPlay />}>
                            Video của bạn
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Clock9 />}>
                            Xem sau
                        </NavbarItem>
                        <NavbarItem to="/" icon={<ThumbsUp />}>
                            Video đã thích
                        </NavbarItem>
                    </NavbarItemGroup>
                    {/* Kênh đã đăng ký */}
                    <NavbarItemGroup title="kênh đã đăng ký">
                        {new Array(4).fill(0).map((_, index) => (
                            <NavbarItem
                                key={index}
                                to="/"
                                icon={
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://th.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></AvatarImage>
                                        <AvatarFallback></AvatarFallback>
                                    </Avatar>
                                }
                            >
                                Kênh số {index + 1}
                            </NavbarItem>
                        ))}
                    </NavbarItemGroup>
                    {/* Khám phá */}
                    <NavbarItemGroup title="Khám phá">
                        <NavbarItem to="/" icon={<Flame />}>
                            Thịnh hành
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Music2 />}>
                            Âm nhạc
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Gamepad2 />}>
                            Trò chơi
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Newspaper />}>
                            Tin tức
                        </NavbarItem>
                        <NavbarItem to="/" icon={<Trophy />}>
                            Thể thao
                        </NavbarItem>
                    </NavbarItemGroup>
                    {/* More */}
                    <NavbarItemGroup>
                        <NavbarItem to="/" icon={<Settings />}>
                            Cài đặt
                        </NavbarItem>
                        <NavbarItem to="/" icon={<CircleHelp />}>
                            Trợ giúp
                        </NavbarItem>
                        <NavbarItem to="/" icon={<MessageSquareWarning />}>
                            Gửi phản hồi
                        </NavbarItem>
                    </NavbarItemGroup>
                </div>
                {/* </ScrollArea> */}
                <footer>footer</footer>
            </SheetContent>
        </Sheet>
    );
};

export default Navbar;
