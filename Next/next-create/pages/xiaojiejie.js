import { withRouter } from 'next/router'
import Link from 'next/link'

const Xiaojiejie = ({router}) => {
  return (
    <>
      <div>{router.query.name},来为我们服务了.</div>
      <Link href="/">go Index</Link>
    </>
  )
}

export default withRouter(Xiaojiejie)