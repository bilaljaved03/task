import React, { useState, useEffect } from 'react';

const DocumentViewer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [readPercentage, setReadPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const readPercentage = (scrollPosition / scrollHeight) * 100;
      setScrollPosition(scrollPosition);
      setScrollHeight(scrollHeight);
      setReadPercentage(readPercentage.toFixed(2));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Document Viewer</h2>
      <p>
        You have read {readPercentage}% of the document
      </p>
lorem*34
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, a laudantium esse recusandae nulla assumenda voluptatum. Deserunt libero accusantium, reiciendis optio enim doloremque facere magni quis vero quidem quo voluptatem.
Quo corporis quae minima rerum suscipit ab, impedit possimus debitis dolores consequatur omnis assumenda quasi eaque esse. Asperiores quis recusandae consequatur repellat alias voluptate assumenda, incidunt pariatur porro debitis saepe!
Animi autem id eveniet voluptates ipsam minus quia molestias recusandae velit ad, consequuntur ipsa quisquam quos temporibus molestiae debitis veniam vel, quaerat quidem! Autem omnis quo eius ex voluptas id.
Temporibus veniam officia minus adipisci cum, minima asperiores velit omnis blanditiis at nulla? Quas, nemo voluptatem atque necessitatibus deleniti minima sunt doloremque debitis animi eum eaque reiciendis facilis dolores veritatis.
Distinctio eius assumenda amet fugiat voluptatibus rerum hic officiis? Assumenda quidem fuga nemo at perspiciatis laborum labore dolorem consectetur fugit? Ullam iusto vitae tenetur non placeat vel ratione consequatur et.
Quaerat maxime placeat, dignissimos et voluptatem nesciunt impedit inventore blanditiis suscipit voluptas eos voluptatum delectus autem error commodi rem enim id fugit deserunt, labore quibusdam. Repudiandae nisi vel illum ut.
Consectetur ut neque odio libero sint architecto enim reiciendis commodi est reprehenderit iste assumenda, tempora odit ipsam nisi unde voluptates vitae sed explicabo. Corrupti cum cumque, similique vitae facere sed.
Voluptas maiores sed recusandae odio hic ut aliquid quaerat accusantium tenetur asperiores maxime dolorum ratione impedit iste provident ducimus, delectus vero esse consequuntur fugit. Eius voluptas reiciendis ullam pariatur nostrum?
Voluptatem eaque, eum placeat delectus voluptatibus corporis optio dolorem sunt ab ut quam nisi architecto aspernatur accusantium quisquam repellendus hic saepe fugiat incidunt eveniet officiis aliquam, quis cum sit. Exercitationem.
Qui, ea? Ut obcaecati quibusdam, cum fuga ad libero temporibus in laborum possimus totam, sit eligendi dicta tempore veritatis illum aliquid esse eveniet soluta officiis quod! Ipsam impedit sit voluptatum.
Cumque dolorem facere reprehenderit cum repudiandae iusto molestias distinctio eum deleniti vitae ea perferendis, odio officia libero? Perferendis pariatur est voluptatem nostrum maiores. Eum tempora praesentium illo omnis nulla deserunt.
Doloremque sapiente voluptates, maiores est qui vel tenetur? Officiis, fugiat, omnis et error sit laboriosam accusantium iure pariatur quos, explicabo dolor! Eligendi adipisci magnam blanditiis perspiciatis maxime iusto, animi modi?
Eaque quod cumque officia blanditiis, soluta nisi qui reprehenderit similique accusantium obcaecati praesentium eos saepe atque voluptatem! Veniam magni adipisci, ipsam tempore fuga dolores maxime nam ad iste quo voluptates.
Eligendi, neque nulla earum praesentium modi dolorum minima velit, repudiandae tempore esse ab inventore fugit rem! Laudantium, nostrum omnis. Sapiente reprehenderit, expedita ad repellendus consequuntur placeat dolor nemo facere consequatur.
Quos fuga explicabo esse temporibus voluptatibus voluptatem cum cumque beatae voluptate, nostrum pariatur accusamus. Ducimus repudiandae ut veniam dignissimos similique, nihil distinctio eveniet, recusandae commodi culpa voluptate temporibus necessitatibus. Voluptas.
Eligendi at nulla nesciunt enim natus, animi corrupti dolor iure voluptatum tempora vero ratione optio veniam, distinctio saepe, iusto magnam in itaque dicta ex incidunt vel cum. Sapiente, optio temporibus.
Porro ex quos temporibus! Officiis iure quidem, delectus dolore excepturi deserunt. Ratione perferendis, doloribus non quidem, accusamus quasi placeat sit blanditiis dignissimos et deleniti expedita sunt eos hic vitae tenetur.
Quis at in, fuga nobis id necessitatibus ullam aperiam quas rem quos beatae doloribus consequuntur? Hic facere aliquam labore nobis ab fuga autem quisquam iusto, obcaecati quo perspiciatis at quos!
Dolorem hic suscipit voluptatibus maiores? Beatae, dolorem vel illo recusandae delectus aspernatur tempora deserunt dolor saepe sint at ut nobis ipsam culpa quasi aliquid sequi tempore iusto odio? Ratione, numquam.
Deleniti voluptatem veniam enim dolor optio ratione officia aperiam quibusdam sunt ab aut odit minima incidunt quisquam iusto voluptatum, error eum nesciunt magnam in velit. Dolor quasi necessitatibus est asperiores.
Amet ullam omnis et, qui a eligendi doloribus optio cum? Dolor ab voluptatum sed cupiditate enim dignissimos quam tempora ducimus totam error. Culpa accusantium dolorum voluptas vitae ullam rerum dignissimos.
Fugiat quisquam itaque magni? Eum in, veniam assumenda eligendi illo nihil dignissimos, ipsam quidem maxime quia deleniti aliquid omnis ad. Commodi eligendi aperiam molestiae facilis nam voluptas vero animi sint.
Est maiores nulla labore laudantium, natus vel illo similique culpa modi repellat eos quasi in ab dicta iusto totam nesciunt corrupti ratione omnis dolores non consectetur molestiae cupiditate. Dolorum, ullam!
   <br /> <br />
   <button   onClick={()=>{
    console.log(readPercentage)
   }} className='btn btn-primary'>See Percentage</button>
    </div>
  );
};

export default DocumentViewer;