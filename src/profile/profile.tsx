export default function Profile({name, semester, program}: {name: string, semester: string, program: string}) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                    JR
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        {name}
                    </h2>
                    <p className="text-sm text-gray-500">
                        Estudiante
                    </p>
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <div>
                    <span className="text-sm font-medium text-gray-500">Semestre:</span>
                    <p className="text-gray-800">{semester}</p>
                </div>

                <div>
                    <span className="text-sm font-medium text-gray-500">
                        Programa académico:
                    </span>
                    <p className="text-gray-800">{program}</p>
                </div>
            </div>
        </div>
    )
}