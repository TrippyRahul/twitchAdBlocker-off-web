import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>O nasıl çalışır?</h2>
            <p>
              Sadece aramanız gerektiğinden bu çok basit bir işlemdir. adblock
              Twitch ve tarayıcınıza indirin. Yüklemeden sonra, twitch adblock
              banner reklamlar, video reklamlar, pop-up'lar ve çok daha fazlası
              dahil olmak üzere tüm reklam türlerini ortadan kaldırarak otomatik
              olarak çalışacaktır. En iyi yanı, Firefox ve Chrome dahil her
              tarayıcıda çalışmasıdır.
            </p>
            <p>
              twitch reklam engelleyici yaygın olarak en güvenilir olanıdır
              twitch reklam engelleyici dünya çapında. Ancak sanatçıların,
              müzisyenlerin inanılmaz sanat eserleri ve birçok grup arasındaki
              tartışmalar da dahil olmak üzere farklı içerik türlerinin keyfini
              çıkarabileceğiniz daha çeşitli eğlence biçimleri olduğundan,
              yalnızca oyunlarla tanınmıyor. Twitch ad block Kullanıcılarının en
              sevdikleri gösteri zamanını herhangi bir sorun yaşamadan
              yaşamalarına olanak tanır.
            </p>
          </div>
          <div className="right">
            <h2>
              Sinir bozucu reklamları şununla engelleyin: Twitch adblocker
            </h2>
            <p>
              Asıl amacı Twitch ads blocker banner reklamlar, video reklamlar ve
              çok daha fazlası dahil olmak üzere her türlü rahatsız edici
              reklamı engellemektir. Uzantıyı yükledikten sonra, bu reklamları
              ekranınızdan otomatik olarak kaldıracaktır. Bu en iyisi Twitch
              adblock plus aynı zamanda verilerinizi ve kişisel bilgilerinizi de
              koruyacağını. Bu harika özellikler sayesinde kesintisiz yayın
              yapabilirsiniz.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>Uzantı nasıl kullanılır?</h2>
              <p>
                IBu basit bir işlemdir, çünkü resmi web sitelerini ziyaret
                etmeniz ve uzantıyı tarayıcınıza indirmeniz yeterlidir. Twitch
                adblock Google Chrome ve Firefox gibi tüm popüler tarayıcılarla
                uyumludur. Ayrıca bununla Twitch reklam engelleme, Yalnızca
                reklamları engellemekle kalmaz, tarayıcınıza zarar verebilecek
                ve hızınızı düşürebilecek tüm zararlı web sitelerini
                engelleyerek tarayıcınızı koruyabilirsiniz.
              </p>
            </div>
            <div className="right">
              <Image src="/1.svg" alt="youtube-logo" fill className="image" />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>Reklamları engellemenin tek çözümü bu</h2>
                <p>
                  Twitch ad blocker ücretsiz olarak çalışan muhteşem bir
                  eklentidir. Web tarayıcınızda sorunsuz bir şekilde çalışır.
                  Ayrıca web sayfalarınızı tarar ve rahatsız edici reklamlarla
                  ilişkili öğeleri tespit eder ve bunları anında engeller. Ancak
                  istenmeyen reklamları kaldırmasına rağmen tarayıcınızı kötü
                  amaçlı yazılımlardan ve tehlikeli web sitelerinden de korur.
                </p>
                <p>
                  Twitch adblock Google Chrome ve Firefox gibi tanınmış
                  tarayıcılarla mükemmel çalışır. Uzantıyı yükleyerek favori
                  programınızı herhangi bir rahatsızlık duymadan
                  yayınlayabilirsiniz. harika özellikleriyle, twitch adblock
                  Gösterim zamanınızı geçirirken anınızı mahvedebilecek her
                  türlü reklamı otomatik olarak engeller. Peki ne bekliyorsun?
                  Acele edin ve uzantıyı hemen indirin ve kusursuz bir gezinme
                  deneyiminin keyfini çıkarın ve verilerinizi koruyun.
                  Gösterinizi reklamsız yayınlamanın en iyi yoludur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
