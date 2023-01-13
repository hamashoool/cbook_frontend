// @flow 
import * as React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill, BsApple } from 'react-icons/bs';
import { useSidebarToggle} from "../../context/SidebarToggleContext";
import { motion } from 'framer-motion';

type Props = {

};
export const Sidebar = ({  }: Props) => {
    const { isOpen } = useSidebarToggle();
    return (
        <div className={` ${isOpen? "w-1/5" : "w-16"} sidebar-container`}>
            <div className='mt-3'>
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsPlus size="32" />} text="Plus" text_type={isOpen}  />
                <Divider />
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsFillLightningFill size="20"/>} text="Action" text_type={isOpen} />
                <SidebarMenu icon={<BsGearFill size="19"/>} text="Settings" text_type={isOpen}/>
                <SidebarMenu icon={<BsApple size="20"/>} text="Apple" text_type={isOpen}/>
                <Divider />
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsPlus size="32" />} text="Plus" text_type={isOpen}  />
                <Divider />
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsPlus size="32" />} text="Plus" text_type={isOpen}  />
                <Divider />
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsFillLightningFill size="20"/>} text="Action" text_type={isOpen} />
                <SidebarMenu icon={<BsGearFill size="19"/>} text="Settings" text_type={isOpen}/>
                <SidebarMenu icon={<BsApple size="20"/>} text="Apple" text_type={isOpen}/>
                <Divider />
                <SidebarTitle title="Navigation Menu" isOn={isOpen} />
                <SidebarMenu icon={<BsPlus size="32" />} text="Plus" text_type={isOpen}  />
                <Divider />
            </div>
        </div>
    );
};

type SidebarIconProps = {
    icon: any
    text: string
    text_type: boolean
}

export const SidebarIcon = ({ icon, text, text_type }: SidebarIconProps) => {
    return (
        <div className={`sidebar-icon group ${text_type? "ml-5": "mx-auto"} anim`}>
            {icon}

            {!text_type && <span className="sidebar-tooltip group-hover:scale-100">{text}</span>}
        </div>
    );
};

type SidebarMenuProps = {
    icon: any
    text: string
    text_type: boolean
}

const SidebarMenu = ({icon, text, text_type}: SidebarMenuProps) => {
    const variants = {
        open: {
            display: "block",
            opacity: 1,
            transition: {
                delay: 0.3,
            },
        },
        closed: {
            display: "none",
            opacity: 0,
        }
    }

    return (
        <div className='flex flex-row items-center text-dark-600 dark:text-dark-50 dark:hover:text-primary-500 hover:text-primary-600 hover:cursor-pointer anim'>
            {<SidebarIcon icon={icon} text={text} text_type={text_type}/>}
            <motion.div
                className="pl-5 uppercase tracking-[2px]"
                initial={false}
                animate={text_type ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 1, ease: "easeInOut"  }}
            >{text}</motion.div>
        </div>
    )
}

export const Divider = () => <div className="sidebar-hr" />;

const SidebarTitle = ({ title, isOn }: { title: string, isOn: any }) => {
    const variants = {
        open: {
            display: "block",
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1,
                ease: "easeIn"
            }
        },
        closed: {
            opacity: 0,
            display: "none"
        }
    }
    return (
        <motion.div
            initial={false}
            animate={isOn ? "open" : "closed"}
            variants={variants}
            className="sidebar-title"
        >
            <span>{title}</span>
        </motion.div>
    );
}

