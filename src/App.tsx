import {
  hospitals,
  imagePaths,
  learningCards,
  qualifications,
  trainingItems,
} from './siteData';

function Doodle({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`doodle ${className}`} />;
}

function SectionTitle({
  kicker,
  title,
  center = true,
}: {
  kicker?: string;
  title: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? 'section-heading text-center' : 'section-heading'}>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function Photo({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <section className="hero-section">
        <img className="hero-bg" src={imagePaths.hero} alt="" />
        <div className="hero-content mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16">
          <div className="hero-copy">
            <p className="hero-badge">
              カマチグループはOTが約1300人が在籍。
            </p>
            <h1 className="hero-title">
              <span>未来を</span>
              <span>デザインする</span>
            </h1>
            <p className="hero-lead">
              <span>手には技術、頭には知識、患者には愛を。</span>
              <span>急性期から回復期、在宅まで。</span>
              <span>作業療法士として幅広く挑戦できる環境があります。</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[0.92fr_1.08fr]">
          <Photo src={imagePaths.team} alt="チームで働く作業療法士" />
          <div>
            <SectionTitle
              center={false}
              kicker="カマチグループOTの魅力"
              title={
                <>
                  <span>幅広い領域で、</span>
                  <span>長く学び続ける</span>
                </>
              }
            />
            <p className="mt-6 text-lg leading-9">
              約1300人のOTが在籍しており、基礎から専門領域まで互いに学び合えるグループです。
              急性期・回復期・生活期・在宅など、働く場所の選択肢が多いことも大きな魅力です。
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad soft-grid">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="OTとしてスキルUP!" title="1年目から即戦力へ" />
            <p className="mt-5 text-lg leading-9">
              基礎的なところはもちろん、さまざまな領域のスペシャリストから専門的な知識を学べます。
              手厚いサポートで、安心して一歩ずつ成長できます。
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningCards.map((card, index) => (
              <article key={card.title} className={`learn-card card-${index} reveal-stagger`}>
                <img src={card.image} alt="" loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle kicker="楽しく × 学ぶ" title="新人研修" />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Photo src={imagePaths.training} alt="新人研修の様子" className="lg:mt-6" />
            <div className="space-y-5">
              {trainingItems.map((item, index) => (
                <article key={item.title} className="training-item reveal-stagger">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad mint-band">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="speech">手厚い</p>
              <SectionTitle center={false} title="教育環境" />
              <h3 className="mt-8 text-2xl font-black">プリセプター制度</h3>
              <p className="mt-4 text-lg leading-9">
                職員にマンツーマンで教育を実施。先輩と話しやすい関係性をつくりやすく、
                新しい環境でも相談しながら経験を重ねられます。
              </p>
              <Photo
                src={imagePaths.education}
                alt="プリセプター制度の様子"
                className="education-illustration"
              />
            </div>
            <div>
              <div className="qual-box">
                <h3>豊富な資格取得者</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {qualifications.map((item) => (
                  <article key={item.label} className="reveal-stagger">
                      <strong>{item.label}</strong>
                      {item.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="event-heading">
            <SectionTitle title="楽しいイベントもたくさん！" />
            <div className="event-peek">
              <img src={imagePaths.eventBbq} alt="バーベキューイベント" loading="lazy" />
              <span>BBQも</span>
            </div>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            <article className="event-card reveal-stagger">
              <Photo src={imagePaths.eventPool} alt="プールイベント" />
              <div>
                <p>POOL-OPEN</p>
                <h3>遊びも学びも、全力で</h3>
              </div>
            </article>
            <article className="event-card reveal-stagger">
              <Photo src={imagePaths.eventSports} alt="スポーツイベント" />
              <div>
                <p>AFTER 5</p>
                <h3>多職種でスポーツも楽しめます</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad hospital-section">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            kicker="気になる病院は病院名をCLICK!!"
            title="働く場所を見つけよう"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hospitals.map((hospital) => (
              <a
                key={hospital.name}
                href={hospital.href}
                target="_blank"
                rel="noreferrer"
                className="hospital-link"
              >
                <div className="hospital-thumb">
                  <img src={hospital.image} alt={`${hospital.name}の外観`} loading="lazy" />
                </div>
                <div className="hospital-body">
                  <span>{hospital.region}</span>
                  <strong>{hospital.name}</strong>
                  <em>詳しく見る</em>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
