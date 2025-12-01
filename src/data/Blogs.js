export const blogs = [
  {
    slug: "react-performance-optimization-techniques",
    title: "React Performance Optimization: Memoization & Code Splitting",
    type: "Blog",
    description:
      "Practical techniques to boost React app performance using React.memo, useMemo, useCallback, and dynamic imports for code splitting.",
    content: `
Performance is crucial for user experience. In this guide, we'll explore essential React optimization techniques that can dramatically improve your app's speed.

**Understanding Re-renders**

React re-renders components when state or props change. Unnecessary re-renders can slow down your app. Here's how to prevent them:

1. **React.memo** - Prevents re-renders when props haven't changed:
   \`\`\`jsx
   const ExpensiveComponent = React.memo(({ data }) => {
     return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
   });
   \`\`\`

2. **useMemo** - Memoizes expensive calculations:
   \`\`\`jsx
   const sortedData = useMemo(() => {
     return data.sort((a, b) => b.score - a.score);
   }, [data]);
   \`\`\`

3. **useCallback** - Prevents function recreation on every render:
   \`\`\`jsx
   const handleClick = useCallback(() => {
     console.log('Clicked:', id);
   }, [id]);
   \`\`\`

**Code Splitting**

Load components only when needed using React.lazy and Suspense:

\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

**Key Takeaways:**
- Use React DevTools Profiler to identify bottlenecks
- Memoize expensive computations, not cheap ones
- Split routes and heavy components
- Virtualize long lists with libraries like react-window
- Keep bundle sizes small with tree shaking

These optimizations can reduce load times by 40-60% in typical applications.
    `,
    status: "Complete",
    tags: ["React", "Performance", "Optimization", "Frontend"],
    readTime: "8 min read",
    date: "Dec 2025",
  },
  {
    slug: "tailwind-css-custom-design-system",
    title: "Building a Custom Design System with Tailwind CSS",
    type: "Gist",
    description:
      "Quick setup guide for creating a scalable design system using Tailwind's configuration, custom utilities, and component patterns.",
    content: `
A well-structured design system ensures consistency across your application. Here's how to build one with Tailwind CSS.

**1. Extend the Theme**

Customize your tailwind.config.js with brand colors and spacing:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  }
}
\`\`\`

**2. Create Component Classes**

Use @layer components for reusable styles:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md p-6 border border-gray-200;
  }
}
\`\`\`

**3. Dark Mode Strategy**

Implement consistent dark mode:

\`\`\`jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 className="text-brand-500 dark:text-brand-400">Hello</h1>
</div>
\`\`\`

**Best Practices:**
- Document your design tokens
- Keep custom utilities minimal
- Use Tailwind's built-in classes first
- Create component variants systematically

This approach scales beautifully from small projects to enterprise applications.
    `,
    status: "Complete",
    tags: ["Tailwind CSS", "Design System", "CSS", "Frontend"],
    readTime: "5 min read",
    date: "Nov 2025",
  },
  {
    slug: "react-router-advanced-patterns",
    title: "Advanced React Router Patterns: Protected Routes & Nested Layouts",
    type: "Blog",
    description:
      "Master complex routing scenarios with protected routes, persistent layouts, route-based code splitting, and smooth transitions.",
    content: `
React Router v6 introduced powerful patterns for handling complex routing scenarios. Let's explore advanced techniques for real-world applications.

**Protected Routes**

Implement authentication-based route protection:

\`\`\`jsx
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
\`\`\`

**Nested Layouts**

Create persistent layouts that wrap child routes:

\`\`\`jsx
function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="analytics" element={<Analytics />} />
  <Route path="settings" element={<Settings />} />
</Route>
\`\`\`

**Route-Based Code Splitting**

Lazy load routes for better performance:

\`\`\`jsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

<Route path="/dashboard" element={
  <Suspense fallback={<PageLoader />}>
    <Dashboard />
  </Suspense>
} />
\`\`\`

**Programmatic Navigation**

Navigate based on logic using useNavigate:

\`\`\`jsx
function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    navigate('/dashboard', { replace: true });
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`

**404 Handling**

Catch unmatched routes gracefully:

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
\`\`\`

These patterns create a robust routing architecture that scales with your application.
    `,
    status: "Complete",
    tags: ["React Router", "React", "Routing", "Frontend"],
    readTime: "7 min read",
    date: "Nov 2025",
  },
  {
    slug: "react-hooks-custom-patterns",
    title: "Building Custom React Hooks: Patterns and Best Practices",
    type: "Blog",
    description:
      "Learn to create reusable custom hooks for common patterns like data fetching, form handling, local storage, and window events.",
    content: `
Custom hooks are the key to writing reusable, clean React code. Let's build practical hooks you'll use in every project.

**1. useLocalStorage - Persistent State**

Sync state with localStorage automatically:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'dark');
\`\`\`

**2. useFetch - Data Fetching**

Handle loading, error, and data states:

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch('/api/users');
\`\`\`

**3. useDebounce - Performance Optimization**

Delay expensive operations:

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const searchTerm = useDebounce(inputValue, 500);
\`\`\`

**4. useWindowSize - Responsive Design**

Track window dimensions:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Usage
const { width } = useWindowSize();
const isMobile = width < 768;
\`\`\`

**Best Practices:**
- Start with "use" prefix
- Return values and setters consistently
- Clean up side effects in useEffect
- Keep hooks focused on one responsibility
- Document dependencies and edge cases

Custom hooks eliminate code duplication and make complex logic simple and reusable.
    `,
    status: "Complete",
    tags: ["React", "Hooks", "Custom Hooks", "Frontend"],
    readTime: "6 min read",
    date: "Oct 2025",
  },
  {
    slug: "css-grid-flexbox-modern-layouts",
    title: "CSS Grid vs Flexbox: When to Use Each for Modern Layouts",
    type: "Blog",
    description:
      "Complete guide to choosing between CSS Grid and Flexbox with practical examples for common layout patterns and responsive design.",
    content: `
CSS Grid and Flexbox are both powerful, but knowing when to use each is crucial for efficient layouts.

**Flexbox: One-Dimensional Layouts**

Best for: Navigation bars, card layouts, centering content

Example - Responsive Navigation:
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
\`\`\`

Example - Perfect Centering:
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

**CSS Grid: Two-Dimensional Layouts**

Best for: Page layouts, dashboards, complex card grids

Example - Responsive Grid:
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

Example - Dashboard Layout:
\`\`\`css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

**Decision Tree:**

Use Flexbox when:
- Content flows in one direction (row or column)
- You need to align items along one axis
- Content size should determine layout
- Building navigation, toolbars, or simple card rows

Use Grid when:
- You need rows AND columns simultaneously
- Creating complex page layouts
- You want precise control over item placement
- Building dashboards, galleries, or masonry layouts

**Combining Both:**

The real power comes from using them together:

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.card-content {
  flex: 1; /* Push footer to bottom */
}
\`\`\`

**Modern Patterns:**

1. **Holy Grail Layout** (Grid):
\`\`\`css
body {
  display: grid;
  grid-template: auto 1fr auto / 200px 1fr 200px;
  min-height: 100vh;
}
\`\`\`

2. **Equal Height Cards** (Flexbox):
\`\`\`css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}
\`\`\`

Master both, and you'll handle any layout challenge with ease.
    `,
    status: "Complete",
    tags: ["CSS", "Grid", "Flexbox", "Layout", "Frontend"],
    readTime: "7 min read",
    date: "Oct 2025",
  },
  {
    slug: "typescript-react-best-practices",
    title: "TypeScript in React: Type-Safe Components and Hooks",
    type: "Gist",
    description:
      "Essential TypeScript patterns for React including component props, hooks typing, event handlers, and generic components.",
    content: `
TypeScript adds type safety to React, catching bugs before runtime. Here are the essential patterns you need.

**1. Component Props**

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};
\`\`\`

**2. useState with Types**

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
const [users, setUsers] = useState<User[]>([]);
\`\`\`

**3. Event Handlers**

\`\`\`tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Clicked');
};
\`\`\`

**4. Custom Hooks**

\`\`\`tsx
interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading } = useFetch<User[]>('/api/users');
\`\`\`

**5. Generic Components**

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
<List 
  items={users} 
  renderItem={(user) => <span>{user.name}</span>}
/>
\`\`\`

**Quick Tips:**
- Use interfaces for props, types for unions
- Leverage type inference when possible
- Use React.FC sparingly (plain functions are often clearer)
- Extract common types into shared files

TypeScript catches errors early and makes refactoring safe. Start with basic prop types and gradually add more as you grow comfortable.
    `,
    status: "Complete",
    tags: ["TypeScript", "React", "Types", "Frontend"],
    readTime: "5 min read",
    date: "Aug 2025",
  },
  {
    slug: "framer-motion-animations-guide",
    title: "Smooth Animations with Framer Motion: From Basic to Advanced",
    type: "Blog",
    description:
      "Complete guide to adding polished animations to React apps using Framer Motion, including transitions, gestures, and layout animations.",
    content: `
Framer Motion makes complex animations simple with a declarative API. Let's explore how to add polish to your React apps.

**Installation**
\`\`\`bash
npm install framer-motion
\`\`\`

**1. Basic Animations**

Fade in on mount:
\`\`\`jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Hello World
</motion.div>
\`\`\`

**2. Hover and Tap Animations**

\`\`\`jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Click Me
</motion.button>
\`\`\`

**3. Stagger Children**

Animate list items sequentially:
\`\`\`jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.li key={item.id} variants={item}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
\`\`\`

**4. Page Transitions**

Smooth route changes:
\`\`\`jsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <Routes location={location}>
      {/* Your routes */}
    </Routes>
  </motion.div>
</AnimatePresence>
\`\`\`

**5. Layout Animations**

Automatic FLIP animations:
\`\`\`jsx
<motion.div layout>
  {items.map(item => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
\`\`\`

**6. Drag Gestures**

\`\`\`jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.2}
  whileDrag={{ scale: 1.1 }}
>
  Drag me!
</motion.div>
\`\`\`

**7. Scroll-Triggered Animations**

\`\`\`jsx
import { useInView } from 'framer-motion';

function Component() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      Animates when scrolled into view
    </motion.div>
  );
}
\`\`\`

**Performance Tips:**
- Use transform and opacity (GPU-accelerated)
- Avoid animating width/height directly
- Use layout animations for position changes
- Keep animations under 300ms for snappy UX
- Test on lower-end devices

**Common Variants Pattern:**

\`\`\`jsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

<motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
  Content
</motion.div>
\`\`\`

Framer Motion turns good interfaces into delightful ones. Start with simple fade-ins, then layer in more complex animations as you build confidence.
    `,
    status: "Complete",
    tags: ["Framer Motion", "Animation", "React", "Frontend", "UX"],
    readTime: "8 min read",
    date: "Aug 2024",
  },
  {
    slug: "react-context-state-management",
    title: "React Context API: Building Scalable State Management",
    type: "Blog",
    description:
      "Learn to build a scalable state management system using Context API with best practices for performance and organization.",
    content: `
Context API provides global state without external libraries. Here's how to build a production-ready state management system.

**Basic Context Setup**

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
\`\`\`

**Usage:**
\`\`\`jsx
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
\`\`\`

**Advanced Pattern: useReducer + Context**

For complex state logic:

\`\`\`jsx
const initialState = {
  user: null,
  loading: false,
  error: null
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const user = await api.login(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
\`\`\`

**Performance Optimization**

Split contexts to prevent unnecessary re-renders:

\`\`\`jsx
// Bad - everything re-renders when anything changes
const AppContext = createContext();

// Good - separate contexts for different concerns
const UserContext = createContext();
const SettingsContext = createContext();
const NotificationsContext = createContext();
\`\`\`

Use React.memo for expensive child components:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders when data changes
  return <div>{/* expensive rendering */}</div>;
});
\`\`\`

**Multiple Providers Pattern**

\`\`\`jsx
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// In main app
<AppProviders>
  <App />
</AppProviders>
\`\`\`

**When to Use Context:**
✅ Theme preferences
✅ User authentication
✅ Language/locale settings
✅ UI state (modals, sidebars)

**When NOT to Use Context:**
❌ Frequently changing data
❌ High-frequency updates
❌ Complex computed state
❌ Large applications (consider Zustand/Redux)

**Best Practices:**
1. Keep context values stable (use useMemo/useCallback)
2. Split large contexts into smaller ones
3. Always provide default values
4. Create custom hooks for each context
5. Document context usage and values

Context API is perfect for medium-sized apps. It eliminates prop drilling without the complexity of external state libraries.
    `,
    status: "Complete",
    tags: ["React", "Context API", "State Management", "Frontend"],
    readTime: "9 min read",
    date: "Aug 2024",
  },
];

export function findBlogBySlug(slug) {
  if (!slug) return undefined;
  return blogs.find((b) => b.slug === slug);
}