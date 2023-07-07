import type { V2_MetaFunction } from '@remix-run/node'
import { Button } from '~/components/ui/button'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div className="flex gap-4 p-4" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<Button variant="default">Primary</Button>
			<Button size="sm" variant="danger">
				Danger
			</Button>
			<Button size="lg" variant="outline">
				Outline
			</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}
