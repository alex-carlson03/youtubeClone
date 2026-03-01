import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import React from 'react'
import ShortsHeader from '@/components/shortsHeader'
import ShortsCard from '@/components/short'
import shortsData from '@/data/shortsData.json'

const shorts = () => {
  return (
    <View style={styles.container}>
      <ShortsHeader />
      <FlatList
      data={shortsData.shorts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ShortsCard {...item} />}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get("window").height} 
      pagingEnabled={true}
      decelerationRate="fast"
      />
    </View>
  )
}

export default shorts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }

})