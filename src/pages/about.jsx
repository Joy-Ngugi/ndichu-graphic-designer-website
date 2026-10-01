import React from 'react';

function About() {
  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: '#ff9d00' }}
          >
            Get to know me
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            About Me
          </h1>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#ff9d00' }}
          />
        </div>

        {/* Intro */}
        <p className="text-lg text-neutral-700 leading-relaxed mb-14 text-center">
          Hello! I'm <strong className="text-neutral-900">Francis Ndichu Kamau</strong>,
          a passionate Graphic Designer and Video Editor dedicated to transforming
          ideas into visually stunning realities. With a background rooted in
          journalism and communication, I bring storytelling and creativity
          together to craft compelling visuals.
        </p>

        {/* Sections */}
        <div className="space-y-12">

          {/* Education */}
          <div>
            <h2
              className="text-2xl font-bold mb-5 pb-2 border-b-2"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', borderColor: '#ff9d00' }}
            >
              Educational Background
            </h2>
            <ul className="space-y-4">
              <li className="pl-4 border-l-2 border-neutral-200">
                <p className="font-semibold text-neutral-900">Bachelor of Arts in Journalism & Communication</p>
                <p className="text-sm text-neutral-500">Maasai Mara University · 2021–2024 · Narok</p>
              </li>
              <li className="pl-4 border-l-2 border-neutral-200">
                <p className="font-semibold text-neutral-900">High School</p>
                <p className="text-sm text-neutral-500">Ndururumo High School · 2016–2019 · Laikipia</p>
              </li>
              <li className="pl-4 border-l-2 border-neutral-200">
                <p className="font-semibold text-neutral-900">Primary Education</p>
                <p className="text-sm text-neutral-500">Subukia Primary School · 2008–2015 · Nakuru</p>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2
              className="text-2xl font-bold mb-5 pb-2 border-b-2"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', borderColor: '#ff9d00' }}
            >
              My Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {[
                'Adobe Photoshop',
                'Adobe Illustrator',
                'Canva',
                'Adobe Premiere Pro',
                'Final Cut Pro',
                'Creative Concept Development',
                'Brand Identity & Logo Design',
                'Social Media Content',
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: '#fff7ec',
                    borderColor: '#ffe0b2',
                    color: '#8a5a00',
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2
              className="text-2xl font-bold mb-5 pb-2 border-b-2"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', borderColor: '#ff9d00' }}
            >
              Experience
            </h2>

            <div className="space-y-8">
              {/* Hope Media */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">HOPE MEDIA KENYA</h3>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Jan 2025 – Present
                  </span>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#ff9d00' }}>
                  Video Editor / Graphic Designer
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-600">
                  <li>• Creating On-Air Graphics — lower thirds</li>
                  <li>• Supporting News Production — infographics and charts for news reports</li>
                  <li>• Promotional and Marketing Materials — social media graphics</li>
                </ul>
              </div>

              {/* KBC */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">KENYA BROADCASTING CORPORATION (KBC)</h3>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Oct 2024 – Dec 2024
                  </span>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#ff9d00' }}>
                  Reporter
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-600">
                  <li>• Researched and analyzed news content from raw footage, interviews, and press sources</li>
                  <li>• Collaborated with reporters and producers to refine news scripts</li>
                  <li>• Coordinated interviews — selecting key soundbites and identifying crucial statements</li>
                </ul>
              </div>

              {/* Media Council */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">MEDIA COUNCIL OF KENYA</h3>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    May – Aug 2024
                  </span>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#ff9d00' }}>
                  Attaché
                </p>
              </div>

              {/* Hega FM */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">HEGA FM</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: '#ff9d00' }}>
                  News Presenter
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-600">
                  <li>• Delivering news bulletins, breaking news, and live updates professionally</li>
                  <li>• Researching, writing, and editing news scripts to journalistic standards</li>
                  <li>• Conducting live and recorded interviews with experts, reporters, and newsmakers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: '#fff7ec', borderLeft: '4px solid #ff9d00' }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              My Philosophy
            </h2>
            <p className="text-neutral-700 italic leading-relaxed max-w-xl mx-auto">
              "I believe that every design and video tells a story. My goal is to
              craft visuals that not only look great but also communicate
              effectively, making a lasting impact."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;