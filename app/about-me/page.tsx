import Navbar from '@/components/me/navbar';
import Image from 'next/image';

export default function AboutMePage() {
  return (
    <>
      <Navbar className="bg-gray-400" />
      <main className="pt-8 pb-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-center my-12 text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
          <Image
            src="/blank-profile.png"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-full object-cover"
          />
          <p className="text-justify">
            My name is Royal and I’m new to this. I’m trying my best and
            improving every day and that’s what matters. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed arcu ex, accumsan vel mauris
            id, sagittis pellentesque orci. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque in semper ipsum. Praesent at
            diam eget enim aliquet posuere non et leo. Sed id mi lectus.
            Phasellus vestibulum lectus rutrum tincidunt feugiat. Vestibulum
            dictum ligula sed nunc consectetur, sit amet commodo sem ornare.
            Donec iaculis, eros vel pharetra vestibulum, mauris lacus
            condimentum odio, nec mattis mi odio sed ex. Quisque quis justo
            congue, tempus mauris a, congue dui. Proin facilisis nulla nibh, non
            condimentum velit auctor non. Sed egestas, quam sit amet condimentum
            commodo, ipsum felis ultrices neque, ac commodo dolor sem eget
            dolor. Sed luctus non nulla non sagittis. Quisque rhoncus nunc non
            mi volutpat posuere. Etiam sit amet tempus eros. Donec egestas
            libero sit amet arcu faucibus, at cursus est vehicula. Fusce ligula
            lectus, semper vel est ut, euismod maximus dui.
          </p>
        </div>

        <div>
          <p className="pt-10 text-justify">
            Cras ullamcorper suscipit nunc, sit amet pharetra leo pellentesque
            et. Aenean a euismod orci, eu suscipit purus. Proin mauris nisl,
            auctor vel nisl a, blandit hendrerit odio. Curabitur tristique velit
            vel diam porta sollicitudin. Sed vel posuere tellus. Suspendisse id
            iaculis orci. Pellentesque id lorem justo. Cras tincidunt posuere
            arcu, quis luctus lectus pulvinar sed. Curabitur fringilla accumsan
            tristique.
          </p>
        </div>
        <div>
          <p className="pt-10 text-justify">
            CIn aliquam sapien sed imperdiet cursus. Duis non ipsum in odio
            rutrum volutpat. Curabitur consectetur scelerisque lacus eget
            laoreet. Duis accumsan augue quis massa placerat mattis. Nam vel
            pellentesque enim, eget luctus felis. Maecenas molestie sit amet leo
            eget volutpat. Fusce porta erat a augue mollis bibendum. Fusce purus
            risus, sollicitudin sed nisl ut, euismod vestibulum massa. Donec sit
            amet aliquet nisi, in posuere orci. Nullam gravida tortor at
            elementum rutrum.
          </p>
        </div>
        <div>
          <p className="pt-10 text-justify">
            Curabitur quis arcu justo. Nam in elementum urna, sit amet blandit
            quam. Quisque volutpat erat in libero suscipit, quis rutrum ipsum
            pulvinar. Phasellus mattis arcu eget tortor faucibus, tempus maximus
            ipsum faucibus. Quisque condimentum mauris vel sodales hendrerit.
            Nam elit dui, aliquet eu scelerisque nec, porta vel nisl. Integer
            dapibus lacinia ex. Aliquam erat volutpat.
          </p>
        </div>

        <div className="flex pt-10 justify-between">
          <div className="relative w-full h-60 md:h-72">
            <Image src="/blank-profile.png" width={450} height={550} alt="…" />
            Image 1
          </div>
          <div className="relative w-full h-60 md:h-72">
            <Image src="/blank-profile.png" width={450} height={550} alt="…" />
            Image 2
          </div>
          <div className="relative w-full h-60 md:h-72">
            <Image src="/blank-profile.png" width={450} height={550} alt="…" />
            Image 3
          </div>
        </div>
      </main>
    </>
  );
}
