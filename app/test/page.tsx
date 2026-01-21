import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';

export default function TestPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Component Test Page</h1>
      
      {/* Test Card */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Card Component Test</h2>
        <p>If you can see this in a white box with border, the Card works!</p>
      </Card>

      {/* Test Buttons */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </Card>

      {/* Test Badges */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </Card>

      {/* Test Form Components */}
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
    </div>
  );
}