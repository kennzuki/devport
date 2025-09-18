import AboutPreview from "~/components/AboutPreview";

const AboutPage = () => {
    return (<>
        <>
             {/* Intro */}
      <div className='flex flex-col md:flex-row md:items-start items-center gap-10 mb-12'>
        <img
          src='/images/profile.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hey, I'm [Ken] 👋
          </h1>
          <p className='text-gray-300 text-lg'>
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
        I transitioned from a career in law after establishing and running a sports based website. In the process, I realized my true passion lay in the world of technology. , I combined my analytical skills and attention to detail with newfound coding expertise.Through tutorials, courses, and real-world projects, I've honed my skills in web development, and I'm excited to continue my journey as a full-stack developer.
        </p>
      </div>
       {/* Tech Stack */}
      <h2 className='text-2xl font-semibold text-white mb-4'>🚀 Tech I Use</h2>
      <ul className='flex flex-wrap gap-4 text-sm text-green-300'>
        {[
          'React',
          'Next.js',
          'Tailwind CSS',
          'Node.js',
          'Laravel',
          'Prisma',
          'MongoDB',
          'PostgreSQL',
          'MySQL',
          'Docker',
        ].map((tech) => (
          <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
            {tech}
          </li>
        ))}
      </ul>
        </>
    </> );
}
 
export default AboutPage;