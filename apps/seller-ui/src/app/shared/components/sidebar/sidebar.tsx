"use client";

import useSeller from "apps/seller-ui/src/hooks/useSeller";
import useSidebar from "apps/seller-ui/src/hooks/useSidebar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Box from "../box";
import { Sidebar } from "./sidebar.styles";
import Link from "next/link";
import {
  Store,
  LayoutDashboard,
  ListOrdered,
  Wallet,
  SquarePlus,
  PackageSearch,
  CalendarPlus,
  BellPlus,
  Mail,
  Settings,
  BellRing,
  TicketPercent,
  LogOut,
} from "lucide-react";
import SidebarItem from "./sidebar.item";
import SidebarMenu from "./sidebar.menu";

const SidebarBarWrapper = () => {
  const { ActiveSidebar, setActiveSidebar } = useSidebar();
  const pathname = usePathname();
  const { seller } = useSeller();

  useEffect(() => {
    setActiveSidebar(pathname);
  }, [pathname, setActiveSidebar]);

  const getIconColor = (route: string) =>
    ActiveSidebar === route ? "#0085ff" : "#969696";

  return (
    <Box
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        padding: "8px",
        top: 0,
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
      className="sidebar-wrapper"
    >
      <Sidebar.Header>
        <Box>
          <Link href={"/"} className="flex justify-center text-center gap-2">
            <Store />
            <Box>
              <h3 className="text-xl font-medium text-[#ecedee]">
                {seller?.shop?.name}
              </h3>
              <h5 className="font-medium pl-2 text-xs text-[#ecedeecf] whitespace-nowrap overflow-hidden text-ellipsis max-w-[170px]">
                {seller?.shop?.address}
              </h5>
            </Box>
          </Link>
        </Box>
      </Sidebar.Header>
      <div className="block my-3 h-full">
        <Sidebar.Body className="body sidebar">
          <SidebarItem
            isActive={ActiveSidebar === "/dashboard"}
            title="Dashboard"
            href="/dashboard"
            icon={<LayoutDashboard fill={getIconColor("/dashboard")} />}
          />
        </Sidebar.Body>
        <div className="mt-2 block">
          <SidebarMenu title="Main Menu">
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/orders"}
              title="Orders"
              href="/dashboard/orders"
              icon={
                <ListOrdered
                  size={24}
                  color={getIconColor("/dashboard/accounts")}
                />
              }
            />
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/payments"}
              title="Payments"
              href="/dashboard/payments"
              icon={
                <Wallet size={24} color={getIconColor("/dashboard/payments")} />
              }
            />
          </SidebarMenu>
          <SidebarMenu title="Products">
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/create-product"}
              title="Create Product"
              href="/dashboard/create-product"
              icon={
                <SquarePlus
                  size={24}
                  color={getIconColor("/dashboard/create-product")}
                />
              }
            />
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/all-products"}
              title="All Products"
              href="/dashboard/all-products"
              icon={
                <PackageSearch
                  size={24}
                  color={getIconColor("/dashboard/all-products")}
                />
              }
            />
          </SidebarMenu>
          <SidebarMenu title="Events">
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/create-event"}
              title="Create Event"
              href="/dashboard/create-event"
              icon={
                <CalendarPlus
                  size={24}
                  color={getIconColor("/dashboard/create-event")}
                />
              }
            />
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/all-events"}
              title="All Events"
              href="/dashboard/all-events"
              icon={
                <BellPlus
                  size={24}
                  color={getIconColor("/dashboard/all-events")}
                />
              }
            />
          </SidebarMenu>
          <SidebarMenu title="Controllers">
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/inbox"}
              title="Inbox"
              href="/dashboard/inbox"
              icon={<Mail size={22} color={getIconColor("/dashboard/inbox")} />}
            />
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/settings"}
              title="Settings"
              href="/dashboard/settings"
              icon={
                <Settings
                  size={22}
                  color={getIconColor("/dashboard/settings")}
                />
              }
            />
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/notifications"}
              title="Notifications"
              href="/dashboard/notifications"
              icon={
                <BellRing
                  size={22}
                  color={getIconColor("/dashboard/notifications")}
                />
              }
            />
          </SidebarMenu>
          <SidebarMenu title="Extras">
            <SidebarItem
              isActive={ActiveSidebar === "/dashboard/discount-codes"}
              title="Discount Codes"
              href="/dashboard/discount-codes"
              icon={
                <TicketPercent
                  size={22}
                  color={getIconColor("/dashboard/discount-codes")}
                />
              }
            />
            <SidebarItem
              isActive={ActiveSidebar === "/logout"}
              title="Logout"
              href="/"
              icon={<LogOut size={22} color={getIconColor("/logout")} />}
            />
          </SidebarMenu>
        </div>
      </div>
    </Box>
  );
};

export default SidebarBarWrapper;
