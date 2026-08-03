import StaggeredMenu from '@/reactbitComponent/StaggeredMenu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/#home' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' },
];

const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
];

export default function Menu() {
    return (
        <StaggeredMenu
            position="right"
            isFixed
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#B497CF', '#5227FF']}
            accentColor="#5227FF"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    );
}