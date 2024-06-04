import { ScrollView, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="flex bg-white">
      <View className="absolute top-0 left-0 right-0 z-10 py-4 px-6 bg-white border-b border-gray-200">
        <Text className="text-lg font-bold">Sticky Header</Text>
      </View>
      <ScrollView className="pt-20 pb-4">
        {/* Scrollable Content */}
        {/* {Array.from({ length: 50 }).map((_, index) => (
          <View key={index} className="py-4 px-6 border-b border-gray-200">
            <Text className="text-lg">Item {index + 1}</Text>
          </View>
        ))} */}
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          dignissimos in sint corrupti quaerat omnis aperiam? Quidem, atque?
          Provident magni quis expedita recusandae temporibus quos accusamus
          illum, commodi sint? Esse asperiores mollitia exercitationem et
          temporibus saepe eaque libero sapiente nisi dolor. Aliquid
          reprehenderit delectus fugit in veniam facere dolore natus fuga.
          Inventore, exercitationem ab sit itaque nostrum cupiditate quidem
          mollitia veritatis, assumenda voluptates similique repellat eum
          voluptas recusandae tempora perspiciatis eos nisi sed. Sunt beatae
          officiis enim magnam debitis non? Optio nostrum debitis saepe
          necessitatibus atque voluptates temporibus veniam expedita quo magnam
          molestias dolore enim fugit aperiam nihil, eaque officiis provident
          praesentium facilis dolor itaque voluptatibus nam. Libero ullam
          inventore quam aperiam tempore! Minima recusandae reprehenderit
          inventore voluptate asperiores magnam illo optio dolorem nobis! Esse
          inventore vero, et, corrupti nemo incidunt sit facilis assumenda quo
          placeat dolores aut quasi nam pariatur consectetur fuga unde error
          commodi repudiandae fugiat voluptate voluptas. Voluptates, facilis
          odit delectus veniam neque cupiditate iste architecto aliquid quae
          unde quia quibusdam maxime mollitia dicta voluptas odio debitis quam,
          consectetur tempore eius enim magni accusantium molestias accusamus.
          Officiis dolore laboriosam iusto sed voluptas iure magnam? Nulla
          inventore eaque amet magni aliquam nesciunt impedit iste nisi
          aspernatur. Adipisci illo, odio hic magnam, nisi eaque aliquam quas
          similique autem atque, incidunt obcaecati corporis dolore accusamus
          voluptatem quidem in nulla doloremque sunt! Voluptatem voluptas
          similique, commodi qui veniam fugit maxime perspiciatis exercitationem
          nesciunt repellendus cupiditate sapiente. Accusantium aliquid harum
          officia illum laudantium rem provident temporibus accusamus, facilis
          quis repellat possimus! Distinctio nesciunt facere sed rerum, iure
          omnis tenetur inventore similique dolore error ipsa iusto, non laborum
          illo fuga sit ea reiciendis. Dignissimos et sapiente eius autem nam
          doloribus quod enim omnis blanditiis ullam voluptate amet mollitia
          assumenda ratione reiciendis, maiores sit earum? Cumque sint non omnis
          dolor, unde corporis laborum. Provident quasi culpa modi? Consequatur
          tempore itaque aut officiis rem. Mollitia nobis dolor, quod iste illum
          sunt assumenda hic voluptatum quibusdam molestiae obcaecati
          perferendis voluptas eum quisquam cum quasi voluptate repudiandae et
          consectetur porro? Natus quibusdam reiciendis odit dolorem doloremque
          illum exercitationem ipsa sint ducimus laudantium? Nulla dolore unde
          ab cum quos ullam omnis et tenetur officiis consectetur iure ad a,
          architecto numquam incidunt natus reiciendis nemo possimus
          exercitationem magni, est illo voluptatem. Deleniti et harum eum
          mollitia, exercitationem molestias natus itaque ipsum excepturi
          consectetur voluptatem provident sapiente ea tempora a, est,
          asperiores pariatur placeat eos? Distinctio explicabo qui totam, fugit
          eveniet mollitia repudiandae similique nihil nisi minus aperiam atque
          aut officiis fuga amet! Repellendus velit atque nihil praesentium
          voluptates sint earum! Deleniti est molestias veniam atque beatae,
          repellat fugiat, saepe libero dolores reprehenderit impedit dicta
          tenetur adipisci maxime at cupiditate dolor asperiores vel. Beatae
          cupiditate, autem nisi voluptas necessitatibus excepturi esse officiis
          vel recusandae, possimus labore quidem quibusdam magnam molestiae!
          Minus cupiditate non reprehenderit hic iste, officiis a voluptate
          inventore nobis laboriosam quo doloribus tempora error nisi, alias est
          architecto perspiciatis qui. Quibusdam, voluptates alias nulla totam
          molestias similique vel impedit ipsam ut. Reprehenderit molestiae et,
          distinctio ab exercitationem qui.
        </Text>
      </ScrollView>
    </View>
  );
}
