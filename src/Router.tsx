import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

export default function Router() {
    console.log('v1');

    return (
        <>
            <Routes>
                <Route path='/history/dist' element={<Outlet />}>
                    <Route
                        index
                        element={
                            <div>
                                <Link to='test'>TEST로</Link>
                            </div>
                        }
                    />
                    <Route path='test' element={<div>TEST</div>} />
                </Route>
            </Routes>
        </>
    );
}
