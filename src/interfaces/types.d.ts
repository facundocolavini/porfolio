export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon' | 'danger' | 'outline' | 'disabled' | 'black' | 'white'
    text?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    /*     class?: string; */
    type?: 'button' | 'submit' | 'reset';
}
export interface NavItem {
    title: string;
    label: string
    url: string;
    icon?: string;
}

export interface Project {
    title: string;
    description: string;
    previewUrl: string;
    image: string;
    tags: string[];
    icons: string[];
    pillClass?: string[];
    showBtnCode?: boolean;
    isReversed: boolean;
    bgGradient: string;
}

export interface Timeline {
    icon: string;
    title: string;
    company: string;
    isFragmentPeriod?: boolean;
    period: string;
    description: string;
    color: string;
    bullGradient: string;
    gradient: string;
}