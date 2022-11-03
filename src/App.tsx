import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />

      <main className="w-full">
        <div className="w-full p-4 min-h-[440px] bg-hero bg-cover bg-top md:bg-[0%_80%] lg:min-h-[520px]">
          <div className="flex flex-col items-start max-w-[30ch] lg:max-w-[40ch] xl:max-w-[55ch] mt-2 sm:ml-10 sm:mt-20 xl:ml-32 xl:mt-28">
            <h2 className="font-cursive text-3xl lg:text-6xl text-darkYellow">
              Assim fica difícil resistir a tantas delícias
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-600 text-sm md:text-lg">
              São tantos bolos, docinhos e salgadinhos que fica difícil
              escolher. Venha conferir todas essas delícias!
            </p>

            <button
              type="button"
              className="px-4 md:px-5 py-3 rounded-md  border-2 bg-gradient-to-tr from-mediumYellow to-lightYellow mt-6 text-darkYellow md:text-xl hover:brightness-105"
            >
              Peça agora!
            </button>
          </div>
        </div>

        <section className="mt-10 md:mt-20 flex flex-col w-full max-w-6xl mx-auto gap-4 md:gap-8 px-1">
          <FeatureCard
            color="bg-mediumPink"
            image="https://bakerbynature.com/wp-content/uploads/2021/02/devils-food-cake-123456789-1-of-1.jpg"
            title="É hora do bolo!"
            description="Uma seleção de bolos de dar água na boca!"
          />
          <FeatureCard
            color="bg-mediumYellow"
            image="https://img.itdg.com.br/tdg/images/recipes/000/134/387/354786/354786_original.jpg"
            title="Não pode faltar um docinho!"
            description="Diversos docinhos deliciosos para sua festa!"
            reverse
          />
          <FeatureCard
            color="bg-mediumBlue"
            image="http://buffetilhadotesouro.com.br/wp-content/uploads/2012/11/fritos_site.jpg"
            title="Salgadinhos de encher os olhos!"
            description="Salgadinhos variados, muitas gostosuras a sua escolha!"
          />
        </section>

        <section className="my-10 md:my-20">
          <h2 className="font-cursive text-darkYellow text-3xl text-center md:text-5xl mb-2 underline decoration-darkYellow/50 decoration-[1.5px] underline-offset-[10px]">
            Destaques da semana:
          </h2>

          <div className="md:max-w-2xl lg:max-w-5xl mx-auto grid gap-4 md:gap-2  max-sm:px-1 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
            <ProductCard
              title="Bolo Floresta Negra"
              price="125,00"
              image="https://s2.glbimg.com/6NJ-nN-KLUos4FXzFs1A_h0LZek=/0x0:380x220/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/43/26/361/bolo_floresta_negra.jpg"
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
