import * as React from "react";
import Work from "interfaces/work";
import { format, differenceInMonths } from "date-fns";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import fontRegular from "fonts/Nasu-Regular.ttf";
import fontBold from "fonts/Nasu-Bold.ttf";

Font.register({
  family: "Nasu-Regular",
  src: fontRegular,
});

// フォント「ナス 太字」
Font.register({
  family: "Nasu-Bold",
  src: fontBold,
});

const borderWidth = "1px";

const border = StyleSheet.create({
  solid: {
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: `${borderWidth} ${borderWidth} ${borderWidth} ${borderWidth}`,
  },
  grid: {
    borderRightStyle: "dashed",
    borderRightColor: "#000000",
    borderRightWidth: borderWidth,
  },
});
const display = StyleSheet.create({
  grid: {
    display: "flex",
    alignItems: "center",
    padding: 4,
  },
});
const styles = StyleSheet.create({
  page: {
    padding: "24px",
    fontFamily: "Nasu-Regular",
    fontSize: "10px",
  },
  title: {
    fontFamily: "Nasu-Bold",
    textAlign: "center",
    fontSize: "12px",
  },
  sectionTitle: {
    fontFamily: "Nasu-Bold",
  },
  section1: {
    fontSize: "12px",
    display: "flex",
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: "1px 1px 1px 1px",
  },
  tableLow: {
    flexDirection: "row",
    ...border.solid,
  },
  tableGrid: {
    ...display.grid,
    ...border.grid,
    width: "100px",
    flexShrink: 0,
  },
  tableGridGrow: {
    ...display.grid,
    ...border.grid,
    flexGrow: 1,
  },
});

const breakPoint = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32];

type Props = {
  works: Work[];
};

const CurriculumVitae: React.FC<Props> = (props: Props) => {
  const today = new Date();

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.title}>職務経歴書</Text>

        <Text>
          {`${today.getFullYear()}`}年{`${today.getMonth() + 1}`}月現在
        </Text>
        <Text>氏名: 川上 望</Text>
        <Text> </Text>

        <Text>
          GitHub:{" "}
          <Link src="https://github.com/wish911wish">
            https://github.com/wish911wish
          </Link>
        </Text>
        <Text>
          Qiita:{" "}
          <Link src="https://qiita.com/nozomi53motomachi">
            https://qiita.com/nozomi53motomachi
          </Link>
        </Text>
        <Text> </Text>

        <Text style={styles.sectionTitle}>職務経歴</Text>
        <Text>2020年 2月 個人事業主として開業</Text>
        <Text>2020年 1月 株式会社アグレックス 退職</Text>
        <Text>2017年 4月 株式会社アグレックス 入社</Text>
        <Text>2016年 3月 埼玉大学工学部 卒業</Text>
        <Text> </Text>

        <Text style={styles.sectionTitle}>開発経歴</Text>
        <View style={{ ...styles.tableLow, backgroundColor: "#dcdcdc" }}>
          <View style={styles.tableGrid}>
            <Text>期間</Text>
          </View>
          <View style={styles.tableGridGrow}>
            <Text>プロジェクト名および業務内容</Text>
          </View>
          <View style={{ ...styles.tableGrid, borderRightWidth: 0 }}>
            <Text>使用技術</Text>
          </View>
        </View>
        {props.works.map((work, index) => (
          <View
            style={{
              ...styles.tableLow,
              borderTopWidth: breakPoint.includes(index) ? borderWidth : 0,
            }}
            key={work.id}
            break={breakPoint.includes(index)}
          >
            <View style={styles.tableGrid}>
              <Text>
                {format(work.periodStart, "yyyy/M") +
                  " ~ " +
                  format(work.periodEnd || new Date(), "yyyy/M")}
              </Text>
              <Text>
                {differenceInMonths(
                  work.periodEnd || new Date(),
                  work.periodStart
                ) + "カ月"}
              </Text>
            </View>

            <View style={{ ...styles.tableGridGrow, alignItems: "flex-start" }}>
              <Text>【概要】</Text>
              <Text>{work.name}</Text>
              <Link src={work.url}>{work.url}</Link>
              <Text> </Text>

              <Text>【担当】</Text>
              {work.role.map((r, index) => (
                <Text key={index}>{r}</Text>
              ))}
              <Text> </Text>

              <Text>【業務内容】</Text>
              <Text>{work.summary}</Text>
              <Text> </Text>

              <Text>【プロジェクト規模】</Text>
              <Text>{work.projectScale}</Text>
            </View>

            <View
              style={{
                ...styles.tableGrid,
                alignItems: "flex-start",
                borderRightWidth: 0,
              }}
            >
              {work.technicalSkills.map((t, index) => (
                <Text key={index}>{t}</Text>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default CurriculumVitae;
