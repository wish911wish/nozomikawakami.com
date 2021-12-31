import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import React, { useEffect } from 'react'
import { useSprings, a } from 'react-spring/three.cjs'
import { GeometryArg, RandomData } from '../interface/interface'
import { throttle } from 'lodash'

const number = 35
const colors = [
  '#F3F4F6',
  '#E5E7EB',
  '#D1D5DB',
  '#9CA3AF',
  '#6B7280',
  '#4B5563',
]
const random = (i: number): RandomData => {
  const r = Math.random()

  return {
    position: new THREE.Vector3(
      200 - Math.random() * 400,
      200 - Math.random() * 400,
      i * 1.5 //52.5 ~ 1.5の間になるように
    ),
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [2 + r * 3, 2 + r * 3, 0.5],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  }
}

const data: GeometryArg[] = new Array(number).fill(null).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  }
})

const Content = (): JSX.Element => {
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }))
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  )
  return (
    <>
      {data.map((d, index) => (
        <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
          <boxBufferGeometry attach="geometry" args={d.args} />
          <a.meshStandardMaterial
            attach="material"
            color={springs[index].color}
            roughness={0.75}
            metalness={0.5}
          />
        </a.mesh>
      ))}
    </>
  )
}

const Lights = (): JSX.Element => {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

export const Home = (): JSX.Element => {
  const worksRef = React.useRef(null)
  const profileRef = React.useRef(null)
  const aboutRef = React.useRef(null)
  const refs = [worksRef, profileRef, aboutRef]
  const [refIndex, setRefIndex] = React.useState<number>(0)

  const setPosition = (direction: -1 | 1) => {
    setRefIndex((prev) => {
      const newIndex = prev + direction
      if (newIndex < 0 || refs.length <= newIndex) {
        return prev
      } else {
        return newIndex
      }
    })
  }
  const throttleSetPosition = throttle(setPosition, 1000, {
    trailing: false,
  })
  const throttleScrollToWorks = React.useCallback(throttleSetPosition, [])

  React.useEffect(() => {
    document.addEventListener(
      'mousewheel',
      (e: WheelEvent) => {
        e.preventDefault()

        if (e.deltaY < 0) {
          throttleScrollToWorks(-1)
        } else if (e.deltaY > 0) {
          throttleScrollToWorks(1)
        }
      },
      { passive: false }
    )
  }, [])

  React.useEffect(() => {
    refs[refIndex].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [refIndex])

  return (
    <>
      <div className="w-screen h-screen z-0 fixed">
        <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}>
          <Lights />
          <Content />
        </Canvas>
      </div>
      <div className="z-10 h-screen relative overflow-scroll">
        <div className="container">
          <main ref={worksRef}>
            <h1 className="title bg-red-400">
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.tsx</code>
            </p>

            <button
              onClick={() => {
                window.alert('With typescript and Jest')
              }}
            >
              Test Button
            </button>

            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className="card">
                <h3>Learn &rarr;</h3>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>

            <h1 className="title bg-red-200" ref={profileRef}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.tsx</code>
            </p>

            <button
              onClick={() => {
                window.alert('With typescript and Jest')
              }}
            >
              Test Button
            </button>

            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className="card">
                <h3>Learn &rarr;</h3>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>

            <h1 className="title bg-red-400" ref={aboutRef}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.tsx</code>
            </p>

            <button
              onClick={() => {
                window.alert('With typescript and Jest')
              }}
            >
              Test Button
            </button>

            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className="card">
                <h3>Learn &rarr;</h3>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </main>

          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              {/* <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} /> */}
            </a>
          </footer>

          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            footer img {
              margin-left: 0.5rem;
            }

            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            .title a {
              color: #0070f3;
              text-decoration: none;
            }

            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }

            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }

            .title,
            .description {
              text-align: center;
            }

            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }

            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                monospace;
            }

            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;

              max-width: 800px;
              margin-top: 3rem;
            }

            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }

            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }

            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }

            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>

          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      </div>
    </>
  )
}

export default Home