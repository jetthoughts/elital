import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'scaling-microservices',
    title: 'Scaling Microservices Architecture',
    date: '2024-03-10',
    author: 'Alex Chen',
    excerpt: 'Learn the best practices for scaling microservices architecture in high-growth environments. From service discovery to deployment strategies.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    content: `
      <h2>Service Discovery</h2>
      <ul>
        <li>Implement service registry</li>
        <li>Use dynamic service discovery</li>
        <li>Handle failover scenarios</li>
        <li>Monitor service health</li>
      </ul>

      <h2>Load Balancing</h2>
      <ul>
        <li>Choose appropriate algorithms</li>
        <li>Implement circuit breakers</li>
        <li>Handle retry logic</li>
        <li>Monitor performance metrics</li>
      </ul>

      <h2>Data Management</h2>
      <ul>
        <li>Choose the right database per service</li>
        <li>Implement CQRS where needed</li>
        <li>Handle eventual consistency</li>
        <li>Manage data synchronization</li>
      </ul>
    `
  },
  {
    slug: 'ai-pair-programming',
    title: 'AI Pair Programming: The Future of Development',
    date: '2024-03-09',
    author: 'Maria Garcia',
    excerpt: 'Explore how AI-powered pair programming tools are transforming software development workflows and improving code quality.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
    content: `
      <h2>Benefits of AI Pair Programming</h2>
      <ul>
        <li>Real-time code suggestions</li>
        <li>Pattern recognition</li>
        <li>Bug detection</li>
        <li>Learning opportunities</li>
      </ul>

      <h2>Popular Tools</h2>
      <ul>
        <li>GitHub Copilot</li>
        <li>Amazon CodeWhisperer</li>
        <li>Tabnine</li>
        <li>Kite</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Review AI suggestions carefully</li>
        <li>Understand the generated code</li>
        <li>Maintain coding standards</li>
        <li>Use AI as an assistant, not replacement</li>
      </ul>
    `
  },
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    date: '2024-03-08',
    author: 'James Wilson',
    excerpt: 'Essential best practices for running Kubernetes in production environments. From security to resource management.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80',
    content: `
      <h2>Security</h2>
      <ul>
        <li>Use RBAC properly</li>
        <li>Implement network policies</li>
        <li>Secure secrets management</li>
        <li>Regular security audits</li>
      </ul>

      <h2>Resource Management</h2>
      <ul>
        <li>Set resource requests/limits</li>
        <li>Implement horizontal pod autoscaling</li>
        <li>Monitor resource usage</li>
        <li>Optimize cluster utilization</li>
      </ul>

      <h2>High Availability</h2>
      <ul>
        <li>Multi-zone deployments</li>
        <li>Pod disruption budgets</li>
        <li>Proper liveness/readiness probes</li>
        <li>Backup and disaster recovery</li>
      </ul>
    `
  }
];