export default function wrapper(props, component) {
	const Component = component || 'div';
	return (Story) => <Component {...props}><Story /></Component>;
}
