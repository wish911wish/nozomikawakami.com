<template>
  <div>
    <h2 class="articleTtl">
      Career
    </h2>
    <div v-for="career in careers" :key="career.id" class="career about-section">
      <div class="name">
        {{ career.name }} : {{ Date.parse(career.start) | moment("YYYY.MM") }} ~ {{ Date.parse(career.end) | moment("YYYY.MM") }}
      </div>
      <div>
        <p class="summary">
          {{ career.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      careers: [
        {
          id: 1,
          name: '個人事業主',
          summary: '通信事業向けCRMシステムの開発案件に参画中。Laravel,React.jsを使用したフロント・サーバーサイドを担当。',
          start: '2020-02-01T00:00:00',
          end: new Date().toISOString()
        },
        {
          id: 2,
          name: '株式会社アグレックス',
          summary: '金融系業務アプリケーションの開発・保守を担当。\n１〜２年目は某信託銀行に常駐し、EUCアプリケーションの開発業務の要件定義〜テスト工程を担当。\n３年目から金融企業向けにSalesforce.comの導入支援・開発業務を担当。',
          start: '2016-08-01T00:00:00',
          end: '2020-01-01T00:00:00'
        },
        {
          id: 3,
          name: 'test',
          summary: 'test summary',
          start: '2020-05-01T00:00:00',
          end: '9999-01-01T00:00:00'
        }
      ]
    }
  }
}
</script>

<style scoped>

.name{
  font-size: 2rem;
  margin-bottom: 1rem;
}

.summary{
  font-size: 1.5rem;
  padding: 0 2rem;
}
</style>
