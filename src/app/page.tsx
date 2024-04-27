"use client"

import Image from "next/image";

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/6yAN3trBHOl
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { ResponsiveBar } from "@nivo/bar"

export default function Home() {
  return (
    <>
      <header className="w-full bg-gray-900 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col items-start justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Unveiling the Future: Groundbreaking AI Research
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Discover the cutting-edge advancements in artificial intelligence that are shaping the world of
                tomorrow. Our research team delves deep into the latest breakthroughs, pushing the boundaries of what's
                possible.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="primary">Explore the Research</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="relative mx-auto rounded-xl overflow-hidden">
              <img
                alt="AI Research"
                className="object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "800/600",
                  objectFit: "cover",
                }}
                width={800}
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-900 dark:text-white">
                <PlayIcon className="h-8 w-8" />
              </button>
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-900 dark:text-white">
                <VolumeIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <CpuIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI research team specializes in developing cutting-edge machine learning algorithms that push the
                boundaries of what's possible. From computer vision to natural language processing, we're at the
                forefront of innovation.
              </p>
            </div>
            <div className="space-y-4">
              <DatabaseIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock the power of your data with our advanced analytics capabilities. Our AI-driven insights help you
                make informed decisions and uncover hidden patterns that drive business growth.
              </p>
            </div>
            <div className="space-y-4">
              <RocketIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Autonomous Systems</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the frontiers of autonomous systems with our cutting-edge research. From self-driving vehicles
                to intelligent robotics, we're pioneering the technologies that will shape the future of automation.
              </p>
            </div>
            <div className="space-y-4">
              <CodeIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Natural Language Processing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock the power of language with our advanced natural language processing capabilities. Our AI models
                can understand, interpret, and generate human-like text, revolutionizing the way we communicate with
                machines.
              </p>
            </div>
            <div className="space-y-4">
              <LayersIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Computer Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the frontiers of visual perception with our cutting-edge computer vision research. From image
                recognition to object detection, our AI models are redefining the way we interact with the world around
                us.
              </p>
            </div>
            <div className="space-y-4">
              <LayoutGridIcon className="h-12 w-12 text-gray-900 dark:text-gray-100" />
              <h3 className="text-2xl font-bold">Reinforcement Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover the power of reinforcement learning, where our AI agents learn to navigate complex environments
                and make optimal decisions through trial and error. This revolutionary approach is transforming the way
                we solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-20 lg:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <TimeseriesChart className="aspect-[16/9]" />
              <h3 className="text-2xl font-bold">Model Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the impressive performance of our AI models across a variety of benchmarks and real-world
                applications. Our research team continuously pushes the boundaries of what's possible, delivering
                state-of-the-art results.
              </p>
            </div>
            <div className="space-y-4">
              <HeatmapChart className="aspect-[16/9]" />
              <h3 className="text-2xl font-bold">Computer Vision Demos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience the power of our computer vision AI firsthand through interactive demos and visualizations.
                From object detection to image segmentation, witness the incredible accuracy and real-time performance
                of our cutting-edge models.
              </p>
            </div>
            <div className="space-y-4">
              <BarChart className="aspect-[16/9]" />
              <h3 className="text-2xl font-bold">Natural Language Processing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the natural language processing capabilities of our AI through engaging demos and interactive
                experiences. From question-answering to text generation, witness the remarkable advancements in our AI's
                ability to understand and communicate in human-like ways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CpuIcon(props) {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function HeatmapChart(props) {
  return (
    <div {...props}>
      <ResponsiveHeatMap
        data={[
          {
            id: "A",
            data: [
              {
                x: "1",
                y: 4415,
              },
              {
                x: "2",
                y: -59456,
              },
              {
                x: "3",
                y: -79886,
              },
              {
                x: "4",
                y: 14478,
              },
              {
                x: "5",
                y: -63874,
              },
              {
                x: "6",
                y: -47542,
              },
              {
                x: "7",
                y: 16635,
              },
              {
                x: "8",
                y: -30278,
              },
              {
                x: "9",
                y: -95178,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: "1",
                y: 41241,
              },
              {
                x: "2",
                y: -77516,
              },
              {
                x: "3",
                y: -19422,
              },
              {
                x: "4",
                y: 61220,
              },
              {
                x: "5",
                y: -65044,
              },
              {
                x: "6",
                y: -59254,
              },
              {
                x: "7",
                y: 9299,
              },
              {
                x: "8",
                y: -58470,
              },
              {
                x: "9",
                y: 51828,
              },
            ],
          },
          {
            id: "C",
            data: [
              {
                x: "1",
                y: 94426,
              },
              {
                x: "2",
                y: 31248,
              },
              {
                x: "3",
                y: -15766,
              },
              {
                x: "4",
                y: 22271,
              },
              {
                x: "5",
                y: 86246,
              },
              {
                x: "6",
                y: -23717,
              },
              {
                x: "7",
                y: 97595,
              },
              {
                x: "8",
                y: -69800,
              },
              {
                x: "9",
                y: 74453,
              },
            ],
          },
          {
            id: "D",
            data: [
              {
                x: "1",
                y: -49899,
              },
              {
                x: "2",
                y: 13864,
              },
              {
                x: "3",
                y: -45673,
              },
              {
                x: "4",
                y: -20270,
              },
              {
                x: "5",
                y: 99430,
              },
              {
                x: "6",
                y: 17283,
              },
              {
                x: "7",
                y: -6514,
              },
              {
                x: "8",
                y: -21766,
              },
              {
                x: "9",
                y: -52610,
              },
            ],
          },
          {
            id: "E",
            data: [
              {
                x: "1",
                y: 81123,
              },
              {
                x: "2",
                y: -25153,
              },
              {
                x: "3",
                y: 2577,
              },
              {
                x: "4",
                y: 24409,
              },
              {
                x: "5",
                y: 82923,
              },
              {
                x: "6",
                y: 51283,
              },
              {
                x: "7",
                y: 10208,
              },
              {
                x: "8",
                y: 4055,
              },
              {
                x: "9",
                y: -14699,
              },
            ],
          },
        ]}
        margin={{ top: 0, right: 10, bottom: 30, left: 30 }}
        axisTop={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 16,
        }}
        colors={{
          type: "sequential",
          scheme: "blue_green",
        }}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        ariaLabel="A heatmap chart/matrix"
      />
    </div>
  )
}


function LayersIcon(props) {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PlayIcon(props) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function TimeseriesChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2018-01-01", y: 7 },
              { x: "2018-01-02", y: 5 },
              { x: "2018-01-03", y: 11 },
              { x: "2018-01-04", y: 9 },
              { x: "2018-01-05", y: 12 },
              { x: "2018-01-06", y: 16 },
              { x: "2018-01-07", y: 13 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "2018-01-01", y: 9 },
              { x: "2018-01-02", y: 8 },
              { x: "2018-01-03", y: 13 },
              { x: "2018-01-04", y: 6 },
              { x: "2018-01-05", y: 8 },
              { x: "2018-01-06", y: 14 },
              { x: "2018-01-07", y: 11 },
            ],
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          format: "%d",
          tickValues: "every 1 day",
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function VolumeIcon(props) {
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </svg>
  )
}
