import React from 'react'
import ResetCallOptionsPage from 'features/pages/options/digital/reset-call'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const ResetCallDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<ResetCallOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(ResetCallDigitalOptions)