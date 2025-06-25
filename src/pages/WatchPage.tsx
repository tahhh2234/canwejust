import '../scss/App.scss'
import { useEffect, useState } from 'react'
import type { Watch } from '../types';
import { supabase } from '../supabaseClient';


function WatchPage() {
  const [watches, setWatches] = useState<Watch[]>([])

  useEffect(() => {
    const fetchWatches = async () => {
      const { data, error } = await supabase
        .from('Watch')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
      }

      if (data) {
        console.log('Supabase data:', data)
        setWatches(data as Watch[])
      }
    }

    fetchWatches()
  }, [])


  return (
    <div className="home">
      <h1>Canwejust watch</h1>
      <pre>{JSON.stringify(watches, null, 2)}</pre>
      {watches.map((watch) => (
        <div key={watch.id}>
          <h2>watch {watch.title}</h2>
          <p>{watch.description}</p>
        </div>
      ))}
    </div>
  )
}

export default WatchPage
