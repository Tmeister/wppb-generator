import { Container } from '@/components/Container'
import tom from '@/images/avatars/tom-mcfarlin.png'
import devin from '@/images/avatars/davin-vinson.jpeg'
import Image from 'next/image'

const people = [
  {
    name: 'Tom McFarlin',
    role: 'Original Author',
    imageUrl: tom,
    bio: 'Tom McFarlin lives in the north east suburbs of Atlanta. When he’s not building custom solutions for others with Pressware, or <a href="https://tommcfarlin.com/" target="_blank" rel="noreferrer">blogging</a>, you can find him hanging out with his wife, two daughters, two dogs, and likely find him exercising or playing some type of music on one of the too-many guitars he owns.',
  },
  {
    name: 'DEVIN VINSON',
    role: 'Current Maintainer',
    imageUrl: devin,
    bio: 'Devin is a developer doing mostly WordPress development. He can be found not far from the beach in the Tampa Bay area of Florida. He has a few projects on <a target="_blank" rel="noreferrer" href="https://github.com/DevinVinson/">Github</a>, and he mostly read others tweets on <a target="_blank" rel="noreferrer" href="https://twitter.com/DevinVinson">Twitter</a>.<br>Devin is the current main developer supporting the <a target="_blank" rel="noreferrer" href="http://wppb.io/">WPPB</a> codebase.',
  },
]

export function Persons() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">
            WordPress plugin boilerplate developers
          </h2>
          <div className="mx-auto mt-20 px-4 text-lg tracking-tight text-slate-500 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-12">
            <ul
              role="list"
              className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-slate-100 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 rounded-lg border border-slate-100 shadow-lg sm:aspect-w-3  sm:aspect-h-3">
                      <Image layout="fill" className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 font-medium leading-6">
                          <h3 className="text-xl font-semibold">{person.name}</h3>
                          <p className="text-slate-400">{person.role}</p>
                        </div>
                        <div className="prose text-lg">
                          <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: person.bio }}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
