import { StyleSheet, View, Image } from "react-native";
import React from "react";
import blogOne from "@/assets/images/blogOne.png";
import Header from "@/components/Header";
import ResourcesHeader from "@/components/ResourcesHeader";
import TailwindText from "@/components/TailwindText";
import blogAuthor from "@/assets/images/blogAuthor.png";

export default function SingleBlog() {
  return (
    <Header className="bg-white text-">
      <ResourcesHeader text="Blog Post" />

      <View className="bg-[#fbfbfb] px-6">
        <TailwindText variant="footer" className="text-center pt-8 pb-2">
          1st May, 2024
        </TailwindText>
        <TailwindText variant="headingOne" className="text-center pb-6">
          The Love of Christ
        </TailwindText>

        <View className=" flex items-center">
          <Image source={blogOne} className="w-[345px] h-[164px]" />
        </View>

        <View className="flex flex-row items-center mt-7">
          <Image source={blogAuthor} className="w-11 h-11 mr-3" />

          <View>
            <TailwindText variant="subHeading4" className="pb-1">
              Article by Joel Uzamere
            </TailwindText>
            <TailwindText variant="footer">
              Rector, Grace and Truth Theological Seminary
            </TailwindText>
          </View>
        </View>

        <TailwindText
          className="text-justify py-9 leading-7"
          variant="bodyText2"
        >
          In the rich tapestry of Christian theology, the love of Christ stands
          as a cornerstone, a profound testament to God's grace and mercy
          towards humanity. This love is not merely a comforting idea for the
          believer, but the very heart of the gospel, shaping our faith, our
          ministries, and our daily lives. As we explore the dimensions of
          Christ's love, we uncover layers that challenge us, comfort us, and
          compel us towards a life of faithful service. The Nature of Christ's
          Love Christ’s love is sacrificial and selfless, characteristics
          epitomized in the act of the Cross. "Greater love has no one than
          this, that someone lay down his life for his friends" (John 15:13).
          This scripture encapsulates the essence of Christ’s love—a love that
          did not count the cost but gave everything for the redemption of His
          people. This sacrifice is not just an act of love towards those who
          would love Him back, but an unmerited favor extended to those who were
          once His enemies (Romans 5:10). The Sovereignty of Christ in Love
          Ephesians 1:4-5 tells us that "He chose us in Him before the
          foundation of the world, that we should be holy and blameless before
          Him. In love He predestined us for adoption to Himself as sons through
          Jesus Christ, according to the purpose of His will." Christ's love,
          therefore, is intentional and selective, purposed not by human will
          but by the divine will of God who calls His own out of the darkness
          into His marvelous light. The Transformative Power of Christ's Love
          The love of Christ is not static; it is transformative. It changes us
          from the inside out, molding us into new creations (2 Corinthians
          5:17). This transformation is evident as we bear the fruits of the
          Spirit, live out His commands, and grow in grace. For the believer,
          the love of Christ compels us to forsake sin, to pursue holiness, and
          to embody the love of Christ in our interactions with others. The
          Eternal Scope of Christ's Love The love of Christ is eternal,
          transcending time and space. Romans 8:38-39 assures us that nothing
          "will be able to separate us from the love of God in Christ Jesus our
          Lord." This eternal love provides the believer with security and hope,
          knowing that our future is held securely in the hands of our loving
          Savior, whose love will never let us go. Conclusion As we reflect on
          the love of Christ, we are moved by its depth and breadth, its power
          and its purpose. This love calls us to a deeper faith, a more profound
          surrender, and a fuller expression of the gospel. It challenges us to
          love as we have been loved—freely, fully, and fervently. May we
          continue to explore the vast riches of Christ’s love, allowing it to
          transform every aspect of our lives and our communities. In this
          journey of faith, let the love of Christ be our guide and our goal,
          our strength and our solace, as we strive to reflect His light in a
          world that so desperately needs it.
        </TailwindText>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({});
