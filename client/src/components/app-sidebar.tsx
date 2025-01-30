import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { ModeToggle } from './mode-toggle';
import { Table2 } from 'lucide-react';
import LocalTime from './local-time';

const items = [
  {
    title: 'Vacancies',
    url: '/',
    icon: Table2,
  },
  {
    title: 'MERN Stack tutotial',
    url: '/employees',
    icon: Table2,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex-row items-center'>
        <ModeToggle />
        <LocalTime />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className='my-2'>
                  {/* <SidebarMenuButton asChild isActive={pathname === item.url}> */}
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className='flex-row justify-between items-center'>
        <a
          href='https://freedns.afraid.org'
          target='_blank'
          className='text-primary hover:underline text-sm'
        >
          Free DNS
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
