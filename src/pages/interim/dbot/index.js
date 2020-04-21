import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../_hero'
import Everything from '../_everything'
import LoveTrading from '../_love-trading'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Interim = () => {
    return (
        <Layout type="interim" interim_type="dbot">
            <SEO title={localize('Interim | DBot')} />
            <Hero interim_type="dbot" />
            <Everything />
            <LoveTrading interim_type="dbot" />
        </Layout>
    )
}

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
