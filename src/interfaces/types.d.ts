export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon' | 'danger' | 'outline' | 'disabled' | 'black'| 'white'
    text?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
/*     class?: string; */
    type?: 'button' | 'submit' | 'reset';
  }