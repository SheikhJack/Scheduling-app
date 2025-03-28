import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function _layout() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='index' />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default _layout