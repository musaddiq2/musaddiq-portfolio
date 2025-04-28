import Hero from '../app/sections/Hero'
import About from '../app/sections/About'
import Experience from '../app/sections/Experience'
import Projects from '../app/sections/Projects'
import Skills from '../app/sections/Skills'
import Contact from '../app/sections/Contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}