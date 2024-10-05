import QuestCard from '../common/quest-card/quest-card'
import styles from './quests.module.css'

const Quests: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-wrap w-full max-w-4xl justify-around">
        <QuestCard
          imageUrl="/images/quest-card/battle-mashroom.png"
          title="バトルマッシュが現れた！"
          level="★"
          content="あなたの庭に不思議な形のキノコが生えました。そしてそれらはただのキノコではありません。近づいてみると、キノコがあなたに向かって毒素を吹きかけてきます！毒が広がる前に、バトルマッシュルームを退治してください。"
          className="mt-24"
        />
        <QuestCard
          imageUrl="/images/quest-card/battle-deamon.png"
          title="真夜中のデーモンが現れた！"
          level="★"
          content="深夜になると、街が不気味な影で満たされる。通りを回っていると、不吉な光を放つデーモンがあなたの前に立ちはだかる。デーモンの呪いを解き、この街を再び平和に戻すために戦う準備をしなければなりません！"
        />
        <QuestCard
          imageUrl="/images/quest-card/battle-skeleton.png"
          title="骨の軍団が襲撃！"
          level="★★"
          content="あらゆる古代の墓地から、骸骨の軍団が復活しました。夜の闇の中で、彼らは無差別に村人たちを襲います。勇敢なあなたに求められるのは、このホラーを終わらせること。骨の軍団を打ち倒し、村に平穏を取り戻しましょう！"
        />
        <QuestCard
          imageUrl="/images/quest-card/battle-golem.png"
          title="錬金術師のゴーレムが暴走！"
          level="★★★"
          content="村の錬金術師がゴーレムの実験に失敗し、制御不能のゴーレムが街中を破壊し始めました。鉄と魔法で造られたこの巨人を止めるためには特別な戦術が必要です。勇気を出して、暴走するゴーレムを倒しましょう！"
        />
        <QuestCard
          imageUrl="/images/quest-card/battle-devil.png"
          title="地獄の門が開かれた！"
          level="★★★★"
          content="禁断の儀式によって、地上に危険なデビルが現れました。地獄の炎を操るこの存在が暴れる前に、彼らの脅威を取り除く必要があります。強力なデビルの力を封じ込めるため、全力を尽くしましょう！"
        />
        <QuestCard
          imageUrl="/images/quest-card/battle-dorgon.png"
          title="ドラゴンの復活！"
          level="★★★★★"
          content="伝説の中にしか存在しなかったドラゴンが、突如として甦り、空を飛びながら村に火を吹きかけます。この巨大な恐怖を克服するには、知恵と勇気が必要です。ドラゴンを倒し、英雄としての名声を得ましょう！"
        />
      </div>
    </div>
  )
}

export default Quests
