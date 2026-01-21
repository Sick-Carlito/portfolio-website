import { Button, Card, Container, Badge, Input, Textarea, Select } from '@/components/ui';
import { FadeIn, ScaleIn } from '@/components/animations';

export default function TestPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold mb-8">Component Test Page</h1>
      
      <FadeIn className="mb-8">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>
      </FadeIn>

      <ScaleIn delay={200} className="mb-8">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </Card>
      </ScaleIn>

      <FadeIn delay={400}>
        <Card>
          <h2 className="text-2xl font-bold mb-4">Form Components</h2>
          <div className="space-y-4">
            <Input label="Email" type="email" placeholder="your@email.com" />
            <Textarea label="Message" placeholder="Enter your message..." />
            <Select 
              label="Project Type" 
              options={[
                { value: 'web', label: 'Web Development' },
                { value: 'content', label: 'Content Writing' }
              ]} 
            />
          </div>
        </Card>
      </FadeIn>
    </Container>
  );
}