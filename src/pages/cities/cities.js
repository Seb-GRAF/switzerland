import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import useLocomotiveScroll from "../../hooks/useLocoScroll";

import "./style.scss";

import Title from "../title/title";
import AnimatedPage from "../animated-page/animated-page";

const Cities = () => {
  useEffect(() => {
    const loco = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
      touchMultiplier: 2,
      multiplier: 1,
      getDirection: true,
      mobile: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    });
    loco.on("scroll", (e) => {
      const nav = document.querySelector("nav");
      if (e.direction === "up") nav.className = "nav__active";
      if (e.direction === "down") nav.className = "nav__hidden";
    });

    const locomotiveUpdate = () => loco.update();
    setTimeout(locomotiveUpdate, 1000);
    return () => {
      loco.destroy();
    };
  });

  return (
    <AnimatedPage>
      <section className="cities" data-scroll-section>
        <Title>
          <h1>Cities</h1>
          <h2>Discover some swiss cities</h2>
        </Title>
        <div className="text__wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque
            mollitia maxime quibusdam natus tempore impedit corrupti veniam
            ratione accusantium laborum repellendus officiis consequatur aliquam
            enim provident nostrum hic ullam nisi saepe animi, perspiciatis,
            sequi vero vitae? Harum nostrum, ducimus tempora unde officiis
            voluptas. Minima assumenda illum nesciunt asperiores, quidem
            praesentium accusamus, omnis deserunt magnam officiis minus
            similique deleniti impedit molestiae pariatur repellat dolorem a, id
            sit aspernatur quibusdam atque non nostrum libero. Consectetur,
            tempore atque eum natus facere consequatur accusamus unde totam
            beatae, quia velit quod quos veritatis officiis voluptas rem?
            Aperiam, id! Et aliquam quasi earum, perferendis laudantium corporis
            maxime accusantium alias quia aspernatur, ab ex dolorem animi autem
            nulla qui reprehenderit consequuntur dolores dolor laboriosam.
            Voluptatem reprehenderit quaerat blanditiis architecto nihil non
            accusantium corrupti eos quia, totam laboriosam ut id dignissimos
            ullam, dolores necessitatibus itaque quas rem molestiae laudantium
            vel exercitationem. Architecto libero sit reiciendis eaque
            blanditiis cupiditate nesciunt ducimus fugit eum, est natus impedit
            eos sunt veritatis quibusdam quasi sequi dolores quas odit. Neque
            dicta impedit illum corporis, iste eum culpa fugiat dolorum numquam
            laboriosam quam doloribus! Consequuntur fuga soluta deserunt facilis
            voluptate magni amet inventore pariatur accusamus neque nisi, atque,
            corporis reprehenderit dolore tempore voluptatibus maiores saepe
            dolores, molestias cum veniam. Reprehenderit debitis quis ipsam
            sequi inventore soluta placeat impedit eveniet corporis sapiente,
            laborum delectus consequatur quas, aut vitae natus aliquam? Delectus
            distinctio enim quae ipsa quibusdam similique harum, repellat
            possimus eligendi dolore magnam! Maxime ea voluptas placeat quas
            labore, autem delectus assumenda minima corporis cum ullam ad
            nesciunt eveniet nam voluptatem itaque a consequuntur omnis quae
            officiis? Quasi commodi in distinctio hic molestiae cumque nihil,
            eligendi tempora magni culpa, illum perspiciatis, sapiente molestias
            amet perferendis dolorem obcaecati reiciendis alias. Sit enim nihil
            doloremque repellendus sed aliquam, nobis cum necessitatibus beatae
            officiis animi quisquam consectetur aspernatur, eveniet autem!
            Deleniti, dolorem id. Ad, necessitatibus! Commodi quaerat, voluptas,
            nesciunt itaque obcaecati consequatur vero expedita, quod error
            maxime facere porro! Corrupti quisquam modi mollitia! Repellendus
            placeat aperiam consequuntur non a architecto culpa, asperiores eos
            aliquid quibusdam. Saepe ipsum ab quae voluptatum laboriosam quasi
            quas vitae? Ad voluptatibus adipisci sequi quidem expedita
            asperiores, in excepturi culpa, neque inventore labore, nihil
            consequuntur recusandae unde repudiandae tempora saepe iure quaerat.
            Voluptate, cupiditate. Saepe eius reprehenderit voluptas iusto
            distinctio unde cumque placeat. Numquam impedit laboriosam, omnis
            eius soluta error quae quas praesentium quo quam totam velit nulla.
            Exercitationem minus quisquam cum incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque
            mollitia maxime quibusdam natus tempore impedit corrupti veniam
            ratione accusantium laborum repellendus officiis consequatur aliquam
            enim provident nostrum hic ullam nisi saepe animi, perspiciatis,
            sequi vero vitae? Harum nostrum, ducimus tempora unde officiis
            voluptas. Minima assumenda illum nesciunt asperiores, quidem
            praesentium accusamus, omnis deserunt magnam officiis minus
            similique deleniti impedit molestiae pariatur repellat dolorem a, id
            sit aspernatur quibusdam atque non nostrum libero. Consectetur,
            tempore atque eum natus facere consequatur accusamus unde totam
            beatae, quia velit quod quos veritatis officiis voluptas rem?
            Aperiam, id! Et aliquam quasi earum, perferendis laudantium corporis
            maxime accusantium alias quia aspernatur, ab ex dolorem animi autem
            nulla qui reprehenderit consequuntur dolores dolor laboriosam.
            Voluptatem reprehenderit quaerat blanditiis architecto nihil non
            accusantium corrupti eos quia, totam laboriosam ut id dignissimos
            ullam, dolores necessitatibus itaque quas rem molestiae laudantium
            vel exercitationem. Architecto libero sit reiciendis eaque
            blanditiis cupiditate nesciunt ducimus fugit eum, est natus impedit
            eos sunt veritatis quibusdam quasi sequi dolores quas odit. Neque
            dicta impedit illum corporis, iste eum culpa fugiat dolorum numquam
            laboriosam quam doloribus! Consequuntur fuga soluta deserunt facilis
            voluptate magni amet inventore pariatur accusamus neque nisi, atque,
            corporis reprehenderit dolore tempore voluptatibus maiores saepe
            dolores, molestias cum veniam. Reprehenderit debitis quis ipsam
            sequi inventore soluta placeat impedit eveniet corporis sapiente,
            laborum delectus consequatur quas, aut vitae natus aliquam? Delectus
            distinctio enim quae ipsa quibusdam similique harum, repellat
            possimus eligendi dolore magnam! Maxime ea voluptas placeat quas
            labore, autem delectus assumenda minima corporis cum ullam ad
            nesciunt eveniet nam voluptatem itaque a consequuntur omnis quae
            officiis? Quasi commodi in distinctio hic molestiae cumque nihil,
            eligendi tempora magni culpa, illum perspiciatis, sapiente molestias
            amet perferendis dolorem obcaecati reiciendis alias. Sit enim nihil
            doloremque repellendus sed aliquam, nobis cum necessitatibus beatae
            officiis animi quisquam consectetur aspernatur, eveniet autem!
            Deleniti, dolorem id. Ad, necessitatibus! Commodi quaerat, voluptas,
            nesciunt itaque obcaecati consequatur vero expedita, quod error
            maxime facere porro! Corrupti quisquam modi mollitia! Repellendus
            placeat aperiam consequuntur non a architecto culpa, asperiores eos
            aliquid quibusdam. Saepe ipsum ab quae voluptatum laboriosam quasi
            quas vitae? Ad voluptatibus adipisci sequi quidem expedita
            asperiores, in excepturi culpa, neque inventore labore, nihil
            consequuntur recusandae unde repudiandae tempora saepe iure quaerat.
            Voluptate, cupiditate. Saepe eius reprehenderit voluptas iusto
            distinctio unde cumque placeat. Numquam impedit laboriosam, omnis
            eius soluta error quae quas praesentium quo quam totam velit nulla.
            Exercitationem minus quisquam cum incidunt?
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Cities;
