import Link from "next/link"

export function MelonScoutFooter() {
  return (
    <footer className="border-t border-amber-500/20 bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-xl font-bold tracking-tighter mb-4">
              <span className="text-amber-500">MELON</span> ROBOTICS
            </div>
            <p className="text-gray-400 max-w-md">
              Pioneering autonomous underwater systems for defense, research, and industrial applications. Transforming
              how we explore and operate in ocean environments.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-2">
              {["Melon Scout AUV", "Fever Swarm Protocol", "Command Center", "Accessories", "Support & Training"].map(
                (item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Partners", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Melon Robotics, Inc. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
