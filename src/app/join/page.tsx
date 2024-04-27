
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eUpNkDUZMUw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Start Simulating</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
                The SimAI software runs while you do other things.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
                While you are going about your everyday activities, your computer will be working to help speed up the AI scientist
                perform research in many fields such as medicine, physics, chemistry, mathematics, and computer science.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="primary">Download for Windows</Button>
                <Button variant="secondary">Download for Mac</Button>
              </div>
            </div>
            <img
              alt="Acme App"
              className="mx-auto rounded-xl shadow-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <AppleIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">iOS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Download Acme App for your iPhone and iPad.
              </p>
              <Button variant="primary">Download for iOS</Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <SmartphoneIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Android</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Get Acme App for your Android device.</p>
              <Button variant="primary">Download for Android</Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ComputerIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Windows</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Install Acme App on your Windows computer.</p>
              <Button variant="primary">Download for Windows</Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <AppleIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">macOS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Get Acme App for your Mac.</p>
              <Button variant="primary">Download for macOS</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <img
              alt="Acme App Features"
              className="mx-auto rounded-xl shadow-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <ClipboardIcon className="h-8 w-8 flex-shrink-0 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Task Management</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Stay organized and on top of your tasks with our powerful task management tools.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <UsersIcon className="h-8 w-8 flex-shrink-0 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Seamlessly collaborate with your team on projects and assignments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CalendarIcon className="h-8 w-8 flex-shrink-0 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Calendar</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Stay on top of your schedule with our integrated calendar feature.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}